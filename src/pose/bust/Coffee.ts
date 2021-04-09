import { Pose } from "../Pose";

// Single color fill
export class Coffee extends Pose {
    build(): string {
        return (`
            <g id="body/mono/Coffee" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0 459)">
                <path d="M394.2068,3.1729 C418.8918,-15.6241 480.8648,-24.0771 507.2108,-5.9781 C533.2328,12.1969 536.069638,41.5883634 548.195638,68.6263634 C559.636638,63.2313634 578.530229,70.9579 581.847229,81.5739 C585.961229,86.5809 586.145998,100.64826 588.982998,107.37926 C712.424998,127.02826 731.1658,223.2669 746.0238,332.5249 C765.6798,443.3939 810.3008,554.0209 790.9298,668.1069 C793.4538,671.7589 795.4438,675.3089 797.2838,679.5249 C801.6928,687.0269 796.0138,697.6459 787.1208,697.2349 C775.6098,696.2239 764.2128,694.8439 752.6478,694.4129 C720.588061,693.299509 688.499044,693.432257 656.427132,693.839725 L652.0538,693.8969 C490.4208,695.9089 328.7968,699.8739 167.1568,700.925422 C161.2928,700.9339 158.4218,695.6749 159.2048,690.4869 C160.7818,680.0419 162.2448,669.5919 163.7718,659.1419 C125.5398,669.2399 84.8958,671.7809 46.7718,660.2039 C44.1048,657.4869 52.9858,658.9599 54.3948,658.5469 C19.3088,634.5719 29.7868,584.0649 32.8948,547.6869 C52.2208,423.0359 59.0338,285.1179 133.7028,178.7509 C166.0058,135.3429 213.3648,100.9749 267.7838,93.2419 L269.293546,93.035189 C285.20561,90.9135419 302.939462,90.2301 316.8518,81.5739 C332.499012,69.0825922 339.166888,46.0019623 355.628414,45.7858969 C361.064093,45.7145511 368.45859,52.5910741 376.4158,57.2599 C377.009823,46.9892609 382.544791,38.321766 383.766848,30.3584013 L383.865773,29.6773877 C385.140963,20.3932047 383.394545,12.0403975 394.2068,3.1729 Z M659.495079,335.818126 C624.804348,311.718621 535.191382,323.827673 533.139925,325.177149 C528.622925,328.148149 526.6778,328.4109 524.2348,332.2689 C521.8228,332.5889 519.4128,332.9209 517.0048,333.2629 C512.1738,334.8409 515.7538,340.7829 521.3338,338.6629 C517.977551,353.137197 527.854675,363.430879 531.7868,377.740285 C533.063533,382.386449 531.83288,390.742646 531.7868,395.4899 C532.168125,401.5428 538.86033,408.69252 537.744968,414.765135 C533.779665,436.354329 512.261625,457.414218 521.3338,478.351088 C527.3438,490.176088 545.4198,496.2059 557.4378,500.2259 C582.3368,509.7819 625.721011,499.866088 640.188011,478.351088 C647.904493,466.875308 656.844395,437.927628 661.445395,428.948628 L662.465187,414.705045 C664.980126,379.298227 667.217186,341.182641 659.495079,335.818126 Z" id="🎨-Background" fill="${this.fillColor || "#FFFFFF"}"></path>
                <path d="M349.5843,43.698 C351.9793,41.577 355.5233,44.242 354.0013,47.107 C350.5813,53.546 347.0733,59.647 342.4833,65.339 C339.7003,68.79 336.7193,72.054 333.6983,75.282 C341.4513,81.989 348.1003,90.316 354.3793,98.12 C362.4083,108.101 369.9993,118.505 379.0123,127.638 C387.901066,136.645191 397.729531,142.941527 409.613343,147.140145 L412.013503,147.973798 C423.95171,152.164877 436.71117,157.824783 443.4403,169.128 C444.7673,171.357 442.0953,174.111 439.8493,172.72 C428.1563,165.48 414.4173,164.024 401.6893,159.24 C389.3943,154.619 378.6763,147.507 369.2063,138.43 C359.7523,129.368 351.8143,119.058 343.5343,108.966 C335.3463,98.987 326.5303,90.464 316.8453,82.021 C301.899774,92.075386 284.83982,96.4503321 267.492758,100.747282 L265.5993,101.216 C248.2313,105.516 230.9563,110.51 214.6623,117.998 C200.2963,124.599 186.1663,132.482 174.4643,143.224 C162.0423,154.624 152.3743,169.184 143.5253,183.423 C123.7313,215.279 109.8153,250.179 97.5643,285.503 C84.8223,322.245 74.1643,359.723 65.5603,397.646 C61.1843,416.936 57.6303,436.363 54.7093,455.926 C53.3033,465.348 52.0543,474.79 50.9573,484.253 C49.7863,494.358 49.5173,504.754 46.4173,514.47 C45.0883,518.634 41.9503,520.362 38.8093,520.215 L38.171324,528.193768 C37.32534,538.83172 36.5367,549.473 36.2703,560.177 C35.828387,577.975 36.0287575,595.721764 37.3089886,613.482053 L37.4903,615.904 C38.4963,628.866 40.7443,643.43 50.4913,652.921 C60.5853,662.751 76.1083,665.842 89.7133,666.019 C121.4003,666.432 151.9023,651.46 179.9423,638.325 C208.8203,624.798 236.9093,609.783 264.3253,593.499 C278.2873,585.206 292.0983,576.637 305.7333,567.818 C312.4243,563.489 319.0683,559.087 325.6623,554.614 C329.4393,552.052 333.0183,549.243 336.8633,546.97 C334.9793,545.216 334.1383,542.458 335.7163,540.05 C324.6013,530.402 319.9753,513.185 319.4343,499.254 C318.9973,488.009 320.6523,476.796 321.9583,465.657 C322.6173,460.04 323.4313,454.433 324.2763,448.841 C324.6103,446.632 324.8653,444.269 325.2553,441.937 C295.2423,458.43 264.3883,473.118 232.7173,486.167 C216.4833,492.856 200.0413,498.87 183.3723,504.381 L179.993754,505.492615 C164.199838,510.662498 148.028033,515.546133 131.7003,518.502 C130.8273,518.66 130.1183,517.371 131.0503,516.96 C146.9623,509.939 163.4253,504.017 179.5763,497.551 L182.2303,496.47 L182.2303,496.47 C181.9253,496.453 181.6093,496.411 181.2793,496.332 C171.8073,494.046 162.4093,490.523 153.1193,487.557 C144.4973,484.804 134.8103,483.075 126.7513,478.919 C126.1313,478.599 126.4783,477.737 127.0823,477.696 C136.1403,477.068 145.9733,479.708 154.8543,481.261 L158.190596,481.845403 C163.779578,482.830889 169.492633,483.890333 175.0543,485.272 C175.2553,483.409 176.2963,481.538 177.7773,480.441 C194.0743,468.372 192.4193,443.996 194.1623,426.021 L195.454789,412.675974 C197.728212,389.320741 200.1333,365.96864 203.7873,342.788 C203.9823,341.55 205.8973,341.905 205.9053,343.074 C206.093762,371.808615 203.924605,400.411019 202.837356,429.100794 L202.668999,433.807256 C202.067921,451.510045 201.596835,469.892326 190.4473,483.514 C192.0063,482.603 194.1143,482.603 195.3773,484.105 C196.9293,485.952 197.8253,488.026 197.7973,490.061 C207.8723,485.837 217.9033,481.503 227.8853,477.081 C259.9783,462.863 291.3983,446.952 321.9873,429.736 C325.2793,427.883 328.4083,429.339 330.0363,431.782 L330.271263,431.748296 C330.310522,431.743 330.3503,431.739 330.3913,431.738 L330.6243,431.728 C330.6333,431.728 330.6423,431.729 330.6503,431.729 C334.9563,429.363 340.8223,431.048 344.5173,434.499 C344.6263,434.603 344.7193,434.715 344.8163,434.825 C349.4943,432.725 353.8623,429.89 357.8263,426.297 C365.9383,418.945 372.8093,409.854 378.7993,400.738 C389.8303,383.948 399.2003,365.277 414.1013,351.456 C426.2083,340.227 441.2183,333.236 456.9653,328.847 C456.8993,328.387 457.0753,327.897 457.3933,327.571 C458.2023,326.742 458.7793,326.455 459.8243,326.958 C459.9073,326.999 459.9573,327.055 459.9913,327.115 L461.527917,324.489527 C462.366661,323.064925 463.227921,321.629931 463.5263,321.253 C465.3143,319.002 467.1543,316.768 469.0223,314.581 C472.1893,310.878 475.7983,307.224 479.9773,304.656 C489.1273,299.035 498.7463,302.216 508.1533,305.288 C513.8373,307.145 519.5023,309.062 525.1763,310.947 L525.7616,311.138131 C529.99246,312.49748 534.9433,313.686489 536.8353,318.169 C537.5843,319.943 537.7003,321.784 537.3513,323.57 C577.5353,313.351 622.1673,318.046 661.3803,330.042 C662.8853,330.502 664.3883,331.74 664.7053,333.366 C669.1983,356.407 671.1993,380.036 669.1663,403.47 C667.4123,423.698 662.9303,443.521 654.4843,462.04 L654.004113,463.085607 C646.066578,480.248109 633.4862,501.40478 614.2733,506.784 C602.6723,510.032 589.8413,508.117 578.0093,507.522 C566.5103,506.943 554.7563,506.859 543.3663,505.051 C533.2223,503.441 524.3343,498.894 518.0653,490.646 C512.6573,483.53 509.8093,474.93 507.4763,466.375 C506.4083,466.715 505.3473,467.076 504.3033,467.485 C499.8963,469.206 496.1623,471.984 492.7863,475.253 C485.6573,482.157 480.1273,490.542 472.6683,497.13 C465.9163,503.094 458.2223,507.732 449.9693,511.298 C432.868005,518.687159 414.522263,521.640055 396.432913,525.556153 L395.1713,525.831 C381.5533,528.819 367.6533,532.488 355.6333,539.578 C355.3983,541.665 354.4473,543.629 352.9233,544.915 C355.0433,546.906 355.9413,550.059 354.0783,553.017 C348.874428,561.275468 339.9108,565.974382 331.863759,571.255698 L331.3403,571.601 C323.4243,576.849 315.4393,581.993 307.3893,587.032 C291.0243,597.278 274.3173,606.96 257.3743,616.216 C230.1233,631.103 202.2873,645.146 173.9473,657.884 C175.6483,666.2525 175.026761,674.881591 176.305274,683.305961 L176.5013,684.508 C177.047467,687.6342 176.309707,690.250193 174.156139,692.292749 L173.9283,692.502 L173.9323,692.474 L173.7303,692.659 L173.662783,692.715551 L173.6853,692.698 C173.43705,692.92525 173.180925,693.13675 172.919878,693.318156 L172.5873,693.532 L172.5873,693.532 C170.513078,694.792519 167.842603,694.778003 165.718856,693.665257 L165.4763,693.532 L165.0683,693.298 C162.2623,691.684 160.3273,687.685 161.4913,684.508 C164.3523,676.7 165.4333,668.367 168.0753,660.507 L165.9793,661.444 L165.9793,661.444 L163.216737,662.64807 C133.338807,675.567808 100.15047,686.4476 67.5963,677.64 C53.2123,673.747 39.7683,665.513 32.5713,652.092 C25.4893,638.886 24.4883,623.552 24.1123,608.862 C23.6483,590.731 24.6203,572.323 27.0113,554.348 C28.6163,542.282 30.5573,529.988 33.5513,518.047 C32.0113,516.688 30.8793,514.739 30.5803,512.325 C29.1673,500.92 31.6403,489.063 33.1543,477.717 C34.6333,466.639 36.2673,455.583 38.1153,444.561 C41.8463,422.302 46.1813,400.09 51.2283,378.092 C60.2103,338.941 72.0713,300.486 86.3513,262.95 L87.6018394,259.680376 C100.797312,225.371633 116.075685,191.794169 137.3503,161.654 C147.5273,147.234 158.2853,134.16 172.6653,123.769 C186.1373,114.033 201.3333,107.023 217.0153,101.665 C232.7143,96.303 248.8503,92.71 265.2713,90.475 C281.9483,88.205 299.5513,86.813 315.1083,79.973 C313.1403,76.445 314.8293,71.682 318.1413,69.494 C329.2873,62.13 339.5943,52.55 349.5843,43.698 Z M706.39,363.9193 C706.857,363.2103 707.966,363.6583 707.761,364.4973 C702.34,386.7063 697.251,408.9603 693.928,431.5933 C687.929424,472.442995 689.03284,513.826137 689.523222,554.977967 L689.548,557.1063 C689.8,579.2723 690.15,601.4403 690.883,623.5973 C691.253,634.7953 691.985,646.1033 691.587,657.3073 C691.37,663.3853 689.75,669.1343 689.176,675.1393 C688.673,680.3903 689.121,685.7223 689.372,690.9803 C689.54,694.4763 684.38,694.3273 684.029,690.9803 L683.5802,686.651143 C682.997148,681.172482 682.2765,675.7273 680.481,670.4833 C678.322,664.1763 677.286,657.9823 676.537,651.3603 C675.38975,641.212988 674.879551,630.964011 674.43677,620.745319 L674.134,613.6773 C672.285023,570.973067 672.349829,528.068489 675.343194,485.408985 L675.562,482.3623 C678.526,442.0383 683.669,398.4693 706.39,363.9193 Z M590.8351,109.7726 C589.4191,109.1906 589.9151,107.0496 591.4831,107.4226 L594.334651,108.102798 C615.229225,113.107507 635.744578,118.529904 655.2471,127.8426 C674.7621,137.1606 691.2841,151.0716 704.4121,168.1776 C729.9321,201.4286 740.5371,241.8386 748.9091,282.2106 C758.2131,327.0716 766.6841,372.0966 776.0691,416.9436 L777.811874,425.297338 C786.495885,467.066944 794.69485,508.860225 800.7361,551.1246 L801.170066,554.189934 C807.262253,597.651439 810.926686,642.617887 804.2791,686.1926 C802.9641,694.8136 788.6181,692.6666 789.1791,684.1496 C790.7991,659.5266 791.9591,635.0326 790.8381,610.3546 C789.7161,585.6716 787.4011,561.0966 783.9501,536.6296 C781.04595,516.0393 776.716753,495.70531 772.8856,475.278678 L772.2851,472.0526 C769.0771,454.679 765.7699,437.32268 762.469996,419.965208 L757.538635,393.977279 C750.14761,355.06424 742.612,316.1171 734.0971,277.4486 L733.591791,275.173222 C725.258966,237.971086 712.974,199.0017 687.9791,169.4596 C662.6141,139.4786 626.3031,124.3796 590.8351,109.7726 Z M498.6681,504.3703 C499.2781,503.0113 501.4121,503.1603 502.0681,504.3703 C504.638467,509.112767 504.924117,515.166259 505.410018,520.520039 L505.4611,521.0713 C506.0791,527.6043 506.6261,534.1593 506.9611,540.7133 C507.5961,553.1523 507.9001,565.5753 507.8611,578.0303 C507.8211,590.7943 507.5641,603.5433 506.8761,616.2883 L506.689393,619.703366 C506.061312,630.779011 505.007892,643.132885 499.7451,652.8153 C497.8321,656.3363 492.6291,655.3013 491.5211,651.7413 C487.8911,640.0853 489.7551,626.2653 490.6861,614.3273 L491.409037,605.012159 C492.124912,595.695988 492.8076,586.3763 493.3491,577.0493 C494.0911,564.2883 494.7031,551.5163 495.2921,538.7493 C495.483433,534.602633 495.690322,530.454633 495.908915,526.307967 L496.2451,520.0893 C496.5321,514.8873 496.5081,509.1793 498.6681,504.3703 Z M90.520319,520.889811 L92.1272601,519.337537 C97.0602589,514.510056 103.294067,507.0751 110.5866,507.5362 C113.4946,507.7202 115.3476,510.1342 114.7446,512.9952 C113.4566,519.1112 107.2176,522.2852 102.7266,526.0192 C97.8066,530.1082 93.1696,534.4792 88.5416,538.8922 C84.4358222,542.805089 80.487279,546.829385 76.6334628,550.979136 L75.1926,552.5412 C73.8111846,554.048646 63.9740741,562.946343 65.0376855,565.254867 L65.0956,565.3582 C65.3916,565.8002 64.8986,566.4082 64.4076,566.2532 C60.1596,564.9112 60.4246,561.2702 62.0306,557.5812 C65.1166,550.4932 70.5206,543.9362 75.2396,537.8832 C79.94585,531.844763 85.0396977,526.222048 90.520319,520.889811 L90.520319,520.889811 Z M514.0613,343.137 C510.7763,335.373 498.6753,335.536 491.8053,336 C474.5053,337.169 455.7873,341.546 440.3943,349.632 C424.435654,358.015015 413.685956,371.447017 404.067359,386.299751 L403.6173,386.997 C394.2423,401.57 385.2133,418.821 370.5333,428.841 C363.0563,433.946 354.3253,438.607 345.2533,440.626 C344.6303,441.721 343.6213,442.588 342.2983,442.903 L341.68329,443.043736 C339.099483,443.614225 335.085377,444.245538 331.6183,443.868 C331.6413,445.564 331.6233,447.247 331.6663,448.854 C331.7883,453.459 331.8403,458.084 331.8403,462.692 C331.8423,472.347 331.3233,482.021 331.7263,491.675 C332.0833,500.214 333.2893,509.136 337.3893,516.769 C340.3963,522.369 344.3653,526.075 349.1563,529.613 C360.9423,522.43 374.2693,518.052 387.7953,514.76 C404.1533,510.779 420.9023,508.122 436.8883,502.724 C444.5823,500.125 451.9793,496.724 458.6813,492.105 C465.7943,487.2 471.2273,480.564 476.8173,474.073 L477.691047,473.064521 C483.395913,466.521746 489.620763,460.261098 497.6833,456.714 C504.6263,453.658 513.7773,453.114 519.8483,448.386 C523.0223,445.912 523.2883,442.322 523.6223,438.646 C519.7343,439.202 515.6183,438.311 511.7433,437.857 L509.735612,437.621348 C506.071401,437.185994 502.491454,436.707462 498.8843,435.775 C498.2143,435.602 498.2143,434.592 498.8843,434.419 C503.1473,433.318 507.3723,432.849 511.7433,432.337 L512.769954,432.208968 C516.724241,431.690379 520.88058,430.90768 524.7593,431.778 C525.4553,429.13 526.4603,426.602 527.8703,424.07 C529.8493,420.513 533.5943,416.48 534.1003,412.325 C534.2513,411.084 533.9623,409.621 533.3773,408.524 L533.175659,408.150069 C532.929843,407.708444 532.638522,407.264333 532.2123,406.989 C532.1653,407.044 532.0653,407.107 531.8483,407.175 C528.8633,408.115 526.2593,406.654 524.8773,404.402 C519.0103,405.13 512.6073,404.885 507.1053,405.128 L501.542325,405.397068 C495.5982,405.669584 489.384024,405.788897 483.7983,404.588 C483.0183,404.421 482.7823,403.123 483.5633,402.789 C490.4303,399.852 498.7603,398.915 506.1123,397.787 C510.2183,397.156 514.3543,396.676 518.4723,396.121 C521.2143,395.751 524.1243,395.14 526.9653,394.993 C534.0883,386.126 530.2503,372.138 520.3373,368.32 C516.7263,369.907 513.4793,368.984 509.5343,368.645 C505.5963,368.307 501.6483,368.078 497.6943,368.095 C489.7713,368.13 481.3753,370.214 473.5293,369.317 C472.2533,369.17 471.0673,367.472 472.3363,366.436 C478.342278,361.534935 486.949614,359.936904 494.57324,358.892455 L496.1533,358.681 C498.7093,358.346 501.8173,357.857 505.0413,357.566 C505.7703,356.144 507.0783,355.069 509.0433,354.802 C509.6273,354.722 510.2143,354.675 510.8003,354.625 L510.7913,354.567 L510.7913,354.567 C515.5833,354.337 515.3753,346.243 514.0613,343.137 Z M185.9923,494.562 C185.907633,494.692667 185.814967,494.817111 185.716374,494.936815 L185.5643,495.113 L186.3523,494.793 L185.9923,494.562 L185.9923,494.562 Z M597.6833,325.788 C577.5133,323.621 557.3143,324.078 537.0843,324.66 C535.4663,329.952 529.8343,334.462 524.3773,334.632 C528.6513,341.137 529.0923,349.941 526.0953,356.84 C532.4583,359.373 537.9403,363.923 541.2683,370.403 C545.8833,379.386 545.2793,389.382 540.7183,397.684 C544.6113,401.208 546.9083,406.931 546.6783,412.325 C546.4213,418.34 542.8363,423.478 539.8573,428.458 C536.6383,433.844 536.5303,438.586 535.5413,444.618 C534.0943,453.446 528.1403,458.8 520.4793,462.144 L520.886571,463.745955 C522.861686,471.434052 525.319148,479.546217 530.9643,485.168 C538.226173,492.400349 549.49185,492.333069 559.086377,492.791381 L559.5493,492.814 C568.3349,493.2532 577.11666,493.76792 585.899188,494.265488 L592.4863,494.634 C602.5983,495.19 612.3093,495.257 620.5643,488.572 C634.0413,477.66 643.2803,459.601 649.1283,443.614 C661.4023,410.058 661.5493,373.233 655.9153,338.285 C637.0203,332.195 617.4153,327.908 597.6833,325.788 Z M429.944515,381.459366 L430.0928,381.4702 C434.2458,381.9442 437.0988,385.3072 438.1148,389.2962 C439.5908,395.0942 438.8668,400.3362 442.4178,405.5702 C446.0708,410.9522 448.3168,415.2612 448.8478,421.9102 C449.0658,424.6462 448.9658,427.3752 449.5748,430.0532 L450.016391,431.929466 C450.485333,433.930127 450.869035,435.857141 450.6358,438.0052 C450.4228,439.9642 449.4688,441.4902 447.5038,442.1182 C441.1008,444.1662 436.1568,439.4482 434.5028,433.4812 C433.0738,428.3272 434.9818,422.1852 432.9658,417.3452 C431.8488,414.6622 429.7888,412.4182 428.6248,409.7172 C427.4718,407.0402 426.8928,404.2432 426.7078,401.3332 C426.3568,395.8292 431.2248,389.2162 428.5088,384.2292 C427.930455,383.1652 428.585442,381.427202 429.944515,381.459366 Z M344.8918,324.6613 C349.2278,323.7803 354.1468,321.7613 358.4228,323.4393 C360.6208,324.3033 361.7068,326.9833 359.8498,328.8463 C356.625629,332.078243 351.939707,332.258346 347.59704,333.020452 L347.2148,333.0893 C342.0798,334.0393 336.9358,334.9403 331.7848,335.7943 C322.0938,337.3993 312.3798,338.8183 302.6318,340.0243 C292.6198,341.2633 282.5798,342.3663 272.5258,343.1963 L268.633582,343.515639 C260.140796,344.194851 251.3038,344.707167 242.9708,343.4063 C241.7598,343.2173 241.9548,341.4543 242.9708,341.1453 C252.0998,338.3823 262.1138,337.6413 271.5518,336.4723 C281.5858,335.2273 291.6028,333.9123 301.5938,332.3523 C311.5688,330.7943 321.5308,329.1223 331.4558,327.2743 C335.9418,326.4403 340.4208,325.5693 344.8918,324.6613 Z M501.3463,315.79 C497.5413,314.443 493.3553,312.447 489.2323,313.115 C482.1223,314.267 475.7943,321.194 470.1663,325.756 L472.992185,325.206725 C487.451519,322.427664 506.599488,319.433875 518.7373,328.627 C518.7683,328.574 518.7923,328.521 518.8273,328.468 C519.8073,326.98 520.9423,325.819 522.1813,324.546 C522.299633,324.434333 522.414189,324.319 522.526856,324.201778 L523.1953,323.49 L521.666392,322.960359 C518.391631,321.80282 514.512083,320.308045 513.898792,320.089861 L513.8563,320.075 C509.6813,318.661 505.5013,317.263 501.3463,315.79 Z M382.5446,12.7157 C381.9496,5.0627 393.8606,5.1257 394.4506,12.7157 C395.7376,29.2857 392.0086,45.6987 383.9826,60.2257 C383.9236,60.3317 383.8586,60.4257 383.7966,60.5257 C388.8166,63.1377 393.8936,65.6437 399.0836,67.8837 C405.7226,70.7497 412.4866,73.3597 419.3716,75.5737 C425.5996,77.5777 433.2726,78.3687 438.5086,82.5387 C449.5496,91.3307 445.4016,109.5767 443.2776,121.4037 L442.946234,123.270733 C441.888661,129.356762 441.123763,135.60077 443.6896,141.4417 C446.4296,147.6807 451.9706,152.3087 456.9136,156.7727 L457.911959,157.677922 C462.290998,161.667159 467.294671,166.5147 470.5066,171.9227 C473.4386,165.8607 477.4356,160.9067 481.6616,155.3297 C484.6766,151.3497 482.5306,150.0377 480.3646,146.1497 C478.2796,142.4077 477.2616,138.4187 477.9136,134.1497 C479.1166,126.2657 485.4176,120.5707 491.6896,116.2917 C499.0966,111.2407 507.3636,107.4987 515.0206,102.7997 C530.7546,93.1457 546.0776,82.1077 559.8826,69.8487 C560.2636,69.5097 560.9236,69.9537 560.6186,70.4167 C549.7136,87.0037 536.9266,101.3367 521.2116,113.5027 C514.839412,118.435825 508.145545,122.527837 501.406854,126.829303 L499.469499,128.072505 C496.763819,129.82522 493.388979,132.167734 492.1656,135.1517 C490.9346,138.1527 493.5596,140.4187 494.9726,142.9047 C499.45957,150.799245 497.294783,158.165181 491.97534,164.860177 L491.7276,165.1687 C486.4416,171.6827 482.4356,177.7407 480.5196,186.0627 C476.402769,203.939479 482.136994,222.560543 488.13954,239.343188 L488.3766,240.0047 C491.6236,249.0507 495.0746,258.0307 497.8956,267.2217 L498.671797,269.762648 C501.227815,278.21932 503.320873,286.560064 500.4536,295.2537 C499.4786,298.2107 495.4456,298.9097 493.7706,296.1267 C487.8616,286.3127 486.3886,274.5027 482.6846,263.7127 C479.0746,253.1967 474.9296,242.8707 471.4426,232.3117 C466.9526,218.7167 463.9476,204.0827 465.5786,189.8227 C465.5306,189.7397 465.4776,189.6617 465.4376,189.5737 L464.294623,187.073577 C461.177877,180.303853 458.167573,174.391646 452.4996,168.9957 C446.5876,163.3667 440.1706,158.3837 435.5186,151.5697 C425.413965,136.768502 431.663225,120.303516 432.883754,104.119673 L433.023413,102.13512 C433.245125,98.774925 433.366627,94.2083216 431.1716,91.8827 C428.7026,89.2647 422.9126,88.5967 419.6366,87.4377 C411.1706,84.4417 402.8276,80.9507 394.8816,76.7587 C387.3176,72.7687 379.9906,68.3607 373.1686,63.1967 L369.710851,60.5954674 C364.255233,56.4791083 358.598071,51.9839941 354.9416,46.3807 C354.5196,45.7357 355.2366,44.6947 356.0006,45.0037 C362.1046,47.4807 367.6816,51.4207 373.3926,54.8487 C373.4816,54.6397 373.5846,54.4287 373.7016,54.2167 C380.7676,41.4287 383.6736,27.2607 382.5446,12.7157 Z M577.528,100.3309 C579.96,93.6619 591.044,94.1769 590.602,102.1009 C590.263103,108.188486 587.67848,113.683178 585.315244,119.21053 L585.063,119.8029 C582.623,125.5619 579.805,130.9689 576.433,136.2469 C569.99,146.3369 562.443,155.7009 554.382,164.5379 C547.074,172.5499 537.482,177.4489 526.429,176.6349 C521.772,176.2919 517.071,175.1069 512.99,172.7809 C508.143,170.0169 502.879,161.7179 496.695,163.7279 C496.097,163.9219 495.539,163.0459 496.056,162.6309 C503.195,156.8819 511.298,165.7959 518.133,167.9439 C528.432,171.1789 539.001,167.6019 545.63,159.2759 C552.551,150.5829 558.921,140.8499 564.738,131.3849 C567.692,126.5789 570.387,121.5909 572.715,116.4499 C575.064,111.2609 575.598,105.6219 577.528,100.3309 Z M560.9267,59.2885 C560.6267,58.3675 561.7707,57.4915 562.5797,58.0175 C567.2707,61.0715 571.3357,65.1065 575.6627,68.6435 C580.4637,72.5675 585.2997,76.4115 590.2107,80.1965 C597.3697,85.7155 589.0667,95.8755 582.7647,89.8465 C574.1407,81.5995 564.6957,70.8155 560.9267,59.2885 Z M535.1716,27.009 C537.07735,19.66023 548.348936,22.690719 546.706351,29.9536228 L546.6526,30.175 C543.54154,42.1716988 547.972408,54.3850804 557.431304,62.1624497 L557.7796,62.445 C563.7636,67.234 555.2856,75.606 549.3606,70.863 C536.4256,60.511 531.0446,42.926 535.1716,27.009 Z" id="🖍-Ink" fill="${this.strokeColor || "#000000"}"></path>
            </g>
        `);
    }
}