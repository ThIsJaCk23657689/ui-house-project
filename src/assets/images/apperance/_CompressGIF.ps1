# 將 ffmpeg.exe 添加到 PATH 環境變數或直接使用其絕對路徑
$ffmpegPath = "ffmpeg"  # 替換為你的 ffmpeg.exe 絕對路徑（如果未配置 PATH）

# 根目錄設定（可以替換為你想要處理的文件夾路徑）
$rootDirectory = ".\"

# 遍歷根目錄下所有 .gif 文件
Get-ChildItem -Path $rootDirectory -Filter *.gif | ForEach-Object {
    $inputFile = $_.FullName
    $outputFile = [System.IO.Path]::Combine($rootDirectory, "compressed_" + $_.Name)

    # 首次壓縮 GIF：降低 FPS 並生成壓縮文件
    & $ffmpegPath -i $inputFile -vf "fps=12,scale=iw:-1:flags=lanczos" -c:v gif $outputFile

    # 檢查文件大小是否超過 100MB
    $fileSizeMB = (Get-Item $outputFile).Length / 1MB

    if ($fileSizeMB -gt 100) {
        Write-Host "文件 $($outputFile) 壓縮後仍超過 100MB，嘗試進一步壓縮..."
        
        # 進一步壓縮：減少顏色數量（調色盤優化）
        $paletteFile = [System.IO.Path]::Combine($rootDirectory, "palette_" + $_.BaseName + ".png")
        & $ffmpegPath -i $inputFile -vf "fps=12,palettegen" $paletteFile
        & $ffmpegPath -i $inputFile -i $paletteFile -lavfi "fps=12,paletteuse" $outputFile

        # 刪除調色盤文件
        Remove-Item $paletteFile -Force
    }

    # 檢查文件大小
    $finalFileSizeMB = (Get-Item $outputFile).Length / 1MB
    if ($finalFileSizeMB -le 100) {
        Write-Host "文件 $($outputFile) 已成功壓縮至 $([math]::Round($finalFileSizeMB, 2)) MB。"
    } else {
        Write-Host "警告：文件 $($outputFile) 壓縮後仍超過 100MB。"
    }
}
