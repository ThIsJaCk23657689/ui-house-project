<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 120 100">
        <g id="圖層_2" data-name="圖層 2">
            <g id="基地">
                <polygon class="cls-1 glowing-border"
                    points="88.63 46.44 0 46.44 0 18.2 51.85 18.2 84.46 0 63.81 18.75 88.63 18.2 88.63 46.44" />
                <path class="cls-2" d="M37.47,27.09H39V39.32H37.47V34H31.29v5.32H29.71V27.09h1.58v5.29h6.18Z" />
                <path class="cls-2"
                    d="M47.19,26.92a5.63,5.63,0,0,1,4.25,1.79,6.31,6.31,0,0,1,1.7,4.5,6.22,6.22,0,0,1-1.72,4.48,5.75,5.75,0,0,1-4.31,1.77A5.46,5.46,0,0,1,43,37.69a6.3,6.3,0,0,1-1.65-4.45A6.41,6.41,0,0,1,43,28.71,5.55,5.55,0,0,1,47.19,26.92Zm.07,1.66a4.07,4.07,0,0,0-3.11,1.31,4.76,4.76,0,0,0-1.21,3.35,4.65,4.65,0,0,0,1.22,3.3,4.2,4.2,0,0,0,6.12,0,4.75,4.75,0,0,0,1.23-3.34,4.61,4.61,0,0,0-1.23-3.26A4,4,0,0,0,47.26,28.58Z" />
                <path class="cls-2"
                    d="M63.05,27.09h1.58V34a9.41,9.41,0,0,1-.18,2.13A4.62,4.62,0,0,1,64,37.35a3.71,3.71,0,0,1-.66.86,4.75,4.75,0,0,1-3.42,1.25,4.81,4.81,0,0,1-3.45-1.24,4,4,0,0,1-.67-.87,4.68,4.68,0,0,1-.45-1.16A10.32,10.32,0,0,1,55.17,34V27.09h1.58V34a5.79,5.79,0,0,0,.35,2.4,2.67,2.67,0,0,0,1.08,1.08,3.49,3.49,0,0,0,1.71.41,3.22,3.22,0,0,0,2.29-.82,2.52,2.52,0,0,0,.67-1,7.35,7.35,0,0,0,.2-2Z" />
                <path class="cls-2"
                    d="M69.86,34.2l-1.19-.81a5.65,5.65,0,0,1-1.61-1.51,3.12,3.12,0,0,1-.47-1.7,3.09,3.09,0,0,1,3.24-3.24,4.1,4.1,0,0,1,2.53.86v2a3.48,3.48,0,0,0-2.56-1.27,2,2,0,0,0-1.27.4,1.23,1.23,0,0,0-.49,1,1.68,1.68,0,0,0,.36,1,4.82,4.82,0,0,0,1.18,1l1.2.79a4,4,0,0,1,2,3.4,3.3,3.3,0,0,1-.88,2.39,3.07,3.07,0,0,1-2.31.92,4.53,4.53,0,0,1-3-1.12V36.12a3.63,3.63,0,0,0,3,1.8,1.72,1.72,0,0,0,1.23-.46,1.49,1.49,0,0,0,.49-1.15A2.7,2.7,0,0,0,69.86,34.2Z" />
                <path class="cls-2" d="M74.85,27.09h6.24v1.56H76.42v3.73h4.51V34H76.42v3.79h4.82V39.3H74.85Z" />
                <path class="cls-2"
                    d="M20.27,24.26H24.1V34a7.55,7.55,0,0,1-2,5.68,7.86,7.86,0,0,1-5.7,1.94,7.81,7.81,0,0,1-5.68-2,7.47,7.47,0,0,1-2-5.63V24.26h3.84v9.83a3.93,3.93,0,0,0,1,2.87A3.71,3.71,0,0,0,16.37,38a3.77,3.77,0,0,0,2.83-1.1,4.34,4.34,0,0,0,1.07-3.14Z" />
            </g>
        </g>
    </svg>
</template>

<style scoped>
.cls-1 {
    fill: #891a27;
    fill-rule: evenodd;
    animation: glow 1.5s infinite alternate;
}

.cls-2 {
    fill: #fff;
}


@keyframes glow {
  0% {
    filter: drop-shadow(0 0 1px #ffcc00);
  }
  50% {
    filter: drop-shadow(0 0 6px #ff9900);
  }
  100% {
    filter: drop-shadow(0 0 1px #ffcc00);
  }
}
</style>