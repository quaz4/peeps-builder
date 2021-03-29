import { Accessory } from "./Accessory";

export class Glasses extends Accessory {
    build(): string {
        return (`
            <g id="accessories/Glasses" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform='translate(-1.999528 9.999668)'>
                <path d="M389.0901,63.2824 C379.5561,127.7714 313.0021,134.9034 301.1771,70.8814 C303.0751,70.0504 304.4401,68.4144 304.1551,65.2384 C304.0881,51.2864 308.4191,36.5404 321.0051,28.7814 C334.0111,20.7754 349.2321,19.9814 364.2831,20.1834 C393.0051,19.4994 392.4011,43.5064 389.0901,63.2824 M290.7581,35.2354 C281.7441,34.8554 270.3401,35.1734 262.2651,40.6654 C260.0451,34.6874 254.2771,28.3044 248.4491,24.8914 C270.1111,25.5254 292.4091,23.3934 314.2331,21.7384 C309.0091,25.2994 304.1491,30.6494 300.9901,36.8344 C298.0591,35.2714 293.8611,35.4174 290.7581,35.2354 M251.0261,70.1194 C226.0311,156.1554 163.6401,118.6554 156.8381,107.6294 C144.5691,89.3834 142.2611,45.0294 152.9481,33.1704 C168.2461,22.4464 189.9031,25.2064 207.9751,24.9434 C241.1761,25.3914 264.7561,35.3234 251.0261,70.1194 M418.6031,30.5484 C411.8121,29.6604 404.5551,29.4814 398.2411,32.4714 C396.2971,24.2084 390.1941,17.3004 383.3031,14.2604 C382.4691,13.2144 382.5941,12.6524 379.7451,12.8094 C362.2501,7.5514 342.6731,10.3334 325.8611,15.7254 C299.3091,17.9614 271.4521,19.7244 244.6771,22.8054 C219.5951,11.5414 143.9021,9.8904 139.1981,37.6534 C133.2811,36.7684 123.2041,32.1114 118.2321,38.4284 C81.7611,32.2454 44.0761,40.8384 7.4471,44.6654 C-1.7729,46.3634 -6.5219,64.6614 3.9441,64.4114 C9.8281,62.8144 3.7631,53.0174 11.6861,52.2804 C47.0271,48.4204 81.5951,42.9444 117.2981,42.3034 C116.0561,48.4684 140.9121,48.8694 141.2791,45.2694 C141.3321,45.2964 141.3881,45.3144 141.4421,45.3384 C135.3001,68.2284 140.8441,101.1704 151.9441,115.3644 C167.4961,133.9504 206.5411,139.2824 223.8541,127.3244 C246.1871,116.2874 269.4201,60.8854 262.8941,42.4794 C274.7381,38.7254 286.4471,39.8524 298.7391,41.7644 C295.9251,49.7134 291.0671,69.2814 298.0561,70.9784 C296.7731,109.8284 332.1301,134.0694 364.7241,118.1324 C392.9351,104.8894 402.8011,62.9714 399.3491,37.5284 C402.8611,44.3144 432.3491,36.9264 418.6031,30.5484" id="🖍-Ink" fill="${this.strokeColor || "#000000"}"></path>
            </g>
        `);
    }

}