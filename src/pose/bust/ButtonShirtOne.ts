import { Pose } from "../Pose";

// Single color fill
export class ButtonShirtOne extends Pose {
    build(): string {
        return (`
            <g id="body/mono/Button-Shirt-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0 459)">
                <path d="M77.6647554,714.4465 C208.309615,734.2905 341.324425,735.2885 473.054888,728.0825 C525.188791,724.1795 577.482489,723.4765 629.574447,728.4665 C660.355831,730.7555 795.316137,741.0715 806.342946,713.5025 C799.402878,566.6975 785.346967,418.6425 742.227462,277.4525 C724.494285,227.3195 709.263785,185.709745 674.653329,144.223745 C663.745368,132.896745 640.22137,109.140591 626.742717,101.392591 C615.064747,94.6815914 610.183858,97.0757451 603.478488,85.7397451 C596.81519,73.2170362 591.900471,52.3030894 582.439231,43.4666933 C572.806048,34.4697084 558.529794,37.6886415 540.834945,40.5865037 C544.08577,-3.34413002 523.807569,-14.5325 495.871523,-22.8865 C446.766721,-41.6275 398.27065,-32.2125683 385.911556,27.5644317 C362.995491,27.5644317 350.123147,37.4260476 336.207129,46.9016348 C330.518487,50.7751005 334.47572,60.6437524 327.6809,63.6881932 C315.109311,68.1641887 292.893508,67.067829 280.789015,72.576458 C225.745415,97.6262286 176.719965,133.951931 144.523708,187.0035 C72.3436037,300.2695 22.7614161,538.8655 31.3413737,673.1115 C27.5822117,679.0065 32.7805215,687.4595 34.101821,693.7985 C35.7696744,699.3125 41.1707233,702.9805 46.8074688,702.3535 C54.6733454,710.8125 66.8396873,712.6955 77.6647554,714.4465 Z" id="🎨-Background" fill="${this.backgroundColour || "#FFFFFF"}"></path>
                <path d="M618.424,98.0718 C617.622,97.6248 618.328,96.4788 619.134,96.8578 C657.879,115.0338 687.602,146.9228 708.516,183.7678 C730.172083,221.919145 742.514934,265.235288 753.156107,307.571995 L753.54,309.1018 C764.887,354.3918 774.535,400.1498 783.221,446.0198 C792.018,492.4708 799.079,539.2098 804.759,586.1418 C807.569,609.3468 810.074,632.5928 812.028,655.8858 C813.004,667.5258 813.891,679.1748 814.688,690.8288 C815.0064,695.4896 815.30624,700.1504 815.563456,704.815296 L815.748,708.3148 C815.907,711.4888 816.284,714.6708 815.5,717.8018 C814.823,720.5008 813.394,722.9448 812.137,725.4228 C809.651,730.3208 802.836,729.5138 800.157,725.4228 L799.379037,724.231103 C797.6025,721.485394 796.126375,718.933675 795.569,715.5168 C795.03,712.2078 795.01,708.7408 794.768,705.3988 C794.323,699.2498 793.944,693.0948 793.512,686.9438 C792.605,673.9958 791.586,661.0558 790.458,648.1258 C788.227,622.5998 785.834,597.0968 782.895,571.6408 C777.673,526.4008 771.12,481.2808 763.395,436.4008 C755.847267,392.5586 746.305429,349.161196 736.351158,305.818363 L735.32,301.3348 C717.891,225.6608 691.029,138.5128 618.424,98.0718 Z M205.7366,394.3942 C206.0216,393.6372 207.2476,393.4632 207.4546,394.3942 C210.0646,406.1452 210.3226,418.2482 210.7216,430.2792 C211.1146,442.1472 211.0986,454.0692 210.9256,465.9442 C210.2876,509.5872 209.0896,553.1932 208.0536,596.8292 C207.5356,618.6562 207.0496,640.4862 206.6766,662.3162 C206.5356,670.50395 206.4171,678.691137 206.318569,686.879028 L206.198047,697.677909 C206.138115,702.45236 206.012754,707.168431 205.4306,711.9382 C205.0466,715.0752 204.2286,718.0672 202.4966,720.7562 C201.267424,722.664906 199.515617,723.633764 197.808102,724.930842 L197.4886,725.1782 C195.3106,726.8992 193.0166,726.9112 190.8596,725.1782 L190.233257,724.6826 C188.172798,723.071307 186.392055,721.812382 185.0766,719.2642 C183.2466,715.7212 182.9536,711.8722 182.6426,707.9682 C182.1706,702.0482 182.4836,696.0412 182.5446,690.1042 C182.6666,678.1942 182.8316,666.2862 183.0406,654.3772 C183.8076,610.7062 185.3236,567.0272 188.0866,523.4342 C189.388247,502.900553 191.153174,482.30047 193.520611,461.849881 L193.9716,458.0172 C194.6896,452.0002 195.3446,445.8762 196.0826,439.7322 C185.0656,431.9832 175.3816,422.5812 167.1236,411.9152 C166.5156,411.1302 167.5166,410.0292 168.2506,410.7892 C176.6886,419.5262 186.3636,426.4912 197.0746,431.9682 C198.8296,419.1072 201.2426,406.3152 205.7366,394.3942 Z M389.7891,5.1082 C389.9401,4.9912 390.1761,4.9402 390.3201,5.1082 C392.6881,7.86892727 392.207894,12.0899594 392.284211,15.5884044 L392.2931,15.9142 C392.4631,21.0292 392.4951,26.1282 392.4781,31.2462 L392.4251,47.5372 L392.4251,47.5372 C392.417989,49.7772 392.23626,52.1088543 392.35118,54.3621986 L392.4111,55.2342 L392.4111,55.2342 C393.6551,56.5082 394.2331,58.3492 393.8111,60.1982 C393.7351,62.5702 392.4951,64.5492 390.6861,65.7932 L394.563225,71.2937 L394.563225,71.2937 L398.4441,76.7912 C406.4431,88.1362 414.5301,99.3802 422.9581,110.4132 C431.5521,121.6622 440.7201,132.4872 450.3141,142.8952 C455.0011,147.9812 459.7681,152.9962 464.6461,157.8992 C466.62835,159.89195 468.6601,161.8352 470.669209,163.800247 L472.6681,165.7752 C473.8491,166.9562 475.3351,168.1242 476.1191,169.6212 C476.5801,170.5042 476.6851,172.6802 476.8501,173.0402 C478.3301,176.2932 475.8051,181.4802 471.6091,179.8572 L471.799502,179.730508 C472.563459,179.199181 472.073928,179.191476 470.3301,179.7082 C469.2301,179.704564 468.198695,179.45134 467.235134,178.950033 L466.9481,178.7922 C465.591177,178.102662 464.379958,176.768105 463.277476,175.700903 L463.0041,175.4402 C460.4831,173.0782 458.0801,170.5732 455.6641,168.1042 C450.6211,162.9532 445.6921,157.6922 440.9201,152.2902 C431.4001,141.5122 422.3751,130.2972 413.8281,118.7342 C405.1221,106.9572 397.0301,94.5752 390.0711,81.6852 C387.4301,76.7932 385.0091,71.8072 382.6881,66.7632 C378.1701,65.3132 377.1211,60.5082 377.4361,55.0952 C375.7691,51.2132 374.2671,47.2512 373.3791,43.2032 C373.2581,42.6482 373.9711,42.1252 374.3981,42.6102 C375.8431,44.2522 377.1811,46.0002 378.4671,47.7932 C379.2431,43.9982 380.2251,40.5052 380.6871,38.2782 L382.6901,28.4502 L382.6901,28.4502 C371.4031,27.8622 359.0351,32.4992 351.2541,40.6172 C350.8361,42.7312 349.2091,44.2442 347.6231,46.2202 C345.8111,48.4792 344.2301,51.0142 343.0511,53.6652 C340.4361,59.5412 341.9121,68.2002 336.8371,72.5112 C336.3081,72.9602 335.7171,73.2722 335.1071,73.4652 C337.515271,85.2729143 336.422414,98.2838122 336.369917,110.262952 L336.3681,111.3172 C336.3801,124.7242 335.9321,138.1422 335.4141,151.5382 L334.8871,164.796176 C334.20422,182.478 333.7607,200.1684 335.4791,217.7532 C343.3241,210.8052 351.4361,204.1742 359.8271,197.8572 C365.344433,193.702533 370.972384,189.69562 376.702524,185.839269 L381.358462,182.728253 C386.93766,178.986971 392.652404,175.13733 398.7611,172.4582 C406.7511,168.9552 414.3491,170.1592 422.0631,173.7522 C429.7451,177.3312 437.1981,181.4882 444.7331,185.3672 C452.3971,189.3112 460.0771,193.2222 467.7521,197.1432 C472.8361,199.7412 480.2861,202.0862 484.0151,206.8682 C484.2531,205.8102 484.5301,204.7552 484.8541,203.7042 C484.4841,202.1012 484.6271,200.3692 485.5261,198.7182 C498.0561,175.6952 509.6491,152.1222 521.1611,128.5782 C526.9881,116.6632 532.5281,104.6072 538.3661,92.6992 L544.041359,81.1014222 C544.989656,79.1694222 545.940767,77.2388667 546.8971,75.3112 C548.3291,72.4252 549.8201,69.5672 551.2681,66.6882 C551.8801,65.4719143 552.64712,64.2637102 553.242957,63.0358793 L553.5251,62.4202 C553.538732,62.3880684 554.913779,58.064065 553.851636,58.4762247 L553.7601,58.5202 C553.2181,58.8272 552.7841,58.1452 553.1351,57.7102 C554.6371,55.8532 556.7291,57.4982 557.5861,59.2172 C559.947544,63.9479407 555.620756,71.3740114 553.956402,75.9039207 L553.8651,76.1572 C548.7001,90.7762 542.8521,105.1212 536.8601,119.4162 C525.3711,146.8232 513.0291,173.8092 500.7141,200.8422 L500.5681,201.3072 L500.5681,201.3072 C503.1941,199.2942 505.9981,197.4672 508.3991,195.6892 C514.4561,191.2022 520.6901,186.9362 526.9141,182.6842 C538.328162,174.886075 550.0516,167.60211 561.969056,160.605712 L564.3551,159.2102 C570.3081,155.7422 576.2051,152.9302 583.2711,153.9712 C589.835733,154.938833 595.938751,158.464976 601.869208,161.329375 L602.4821,161.6232 L620.8071,170.3352 C618.8481,162.5232 616.7271,154.7492 614.5141,147.0042 C610.1981,131.8972 605.4491,116.9172 600.2991,102.0712 C595.4891,88.2002 590.289365,74.4809551 584.789569,60.8702299 L583.133438,56.7853395 C580.891066,51.1813582 578.661314,45.0705393 572.2521,43.3452 C565.8471,41.6202 558.5001,44.1782 552.6461,40.5272 C552.1141,40.1952 552.1801,39.3182 552.8251,39.1562 L556.437306,38.245786 C563.219575,36.5586464 571.170544,34.8614444 577.5841,36.5022 C584.5631,38.2902 590.3371,44.1472 593.7231,50.2362 C597.48795,57.0097 600.141822,64.590035 602.999073,71.8128897 L603.4521,72.9502 C606.7311,81.1242 609.8851,89.3472 612.9031,97.6222 C618.9371,114.1622 624.4301,130.9012 629.4021,147.7912 C631.7981,155.9312 634.0711,164.1102 636.2561,172.3092 C636.8841,174.6672 637.9201,177.5262 638.7701,180.5082 C639.7441,181.4582 640.6661,182.5182 641.5311,183.7272 C642.9661,185.7332 641.9361,188.0852 640.1521,189.2862 C640.0831,191.3382 639.6271,193.2682 638.5371,194.9222 C634.2821,201.3812 623.0331,199.7172 623.4901,191.0342 C623.5591,189.7052 624.0771,188.4362 624.8611,187.3642 L624.8391,187.1902 L624.8391,187.1902 L624.7501,186.8722 L624.7501,186.8722 C622.7971,185.9362 620.8361,184.8932 618.7691,183.8722 L599.5371,174.3692 L599.5371,174.3692 C593.9671,171.6162 587.7931,167.3632 581.5991,166.3142 C575.824632,165.336455 569.732141,169.638653 564.770094,172.234403 L564.4481,172.4012 C552.4531,178.5492 540.5471,184.9012 528.6881,191.3052 C522.8991,194.4322 517.1851,197.6892 511.4181,200.8532 C506.5961,203.4992 501.3921,207.2972 495.9721,208.7902 C493.6571,210.5902 490.9071,210.3492 488.6971,208.9882 C489.7071,215.2432 489.6451,221.6622 489.9551,228.0572 C490.371989,236.606533 490.435693,245.17957 490.573229,253.740492 L490.6291,256.9502 C490.9931,275.8762 491.1881,294.8072 491.2601,313.7372 C491.5161,381.1452 490.7711,448.5732 490.5971,515.9812 C490.5091,549.8492 489.8381,583.7462 488.9581,617.6012 C488.584946,631.946892 487.805118,646.275401 486.962724,660.599449 L486.4991,668.4122 C485.5181,684.8972 484.9391,701.5642 481.8871,717.8272 C481.4891,719.9482 477.8991,720.0022 477.5471,717.8272 C474.73835,700.40095 474.582139,682.592376 474.042121,664.96178 L473.9281,661.4382 C473.2791,642.5082 472.9711,623.5902 473.0371,604.6502 C473.2771,537.2152 475.0301,469.8222 476.4641,402.4062 C477.1851,368.5342 477.6701,334.6472 478.7901,300.7862 C479.3501,283.8432 479.9841,266.9112 480.7361,249.9752 C481.0721,242.41345 481.395084,234.859356 481.897321,227.308899 L482.1241,224.0732 C482.2801,221.9622 482.4061,219.8772 482.5591,217.8112 C475.7361,220.3032 469.4961,215.6892 463.3581,212.5322 C456.2841,208.8932 449.2131,205.2482 442.1361,201.6162 L435.05347,197.990496 L435.05347,197.990496 L420.8791,190.7582 C414.4971,187.5012 409.5801,184.2602 402.7731,188.0802 C378.2501,201.8382 355.7151,220.1442 335.2931,239.3532 C331.3771,243.0372 323.1021,242.0472 322.1101,235.8732 C317.872778,209.497658 320.449862,182.740374 322.613219,156.284848 L323.410711,146.462918 C324.3771,134.731783 325.4296,123.000533 326.8321,111.3172 C327.4593,106.0908 328.08394,100.8676 328.77514,95.651184 L329.3071,91.7402 C330.1711,85.5572 330.7351,79.4112 332.5771,73.4812 C331.9961,73.2932 331.4371,72.9852 330.9371,72.5112 C325.3991,67.2572 328.0691,58.1402 330.5961,51.8902 C333.0911,45.7212 336.8961,40.3372 341.6611,35.7032 C342.7001,34.6912 344.1651,34.0402 345.6371,34.0062 C357.1901,26.3522 369.8641,22.5322 383.0551,26.7102 C383.4256,24.9387 383.803412,23.1700125 384.201194,21.405825 L384.6061,19.6432 C385.6321,15.2662 386.0131,8.0362 389.7891,5.1082 Z M508.1948,696.3269 C511.7798,695.3409 515.7048,696.3799 518.3318,699.0069 C520.9578,701.6339 521.9978,705.5579 521.0098,709.1429 C520.5158,710.9079 519.6228,712.4399 518.3318,713.7409 C517.124657,714.939686 515.716611,715.795298 514.108463,716.307737 L513.7338,716.4199 L513.1478,716.6639 C511.3508,717.1469 509.5528,717.1469 507.7568,716.6639 C506.0388,716.1819 504.5478,715.3129 503.2818,714.0569 C502.0248,712.7909 501.1558,711.2999 500.6738,709.5809 C500.1908,707.7839 500.1908,705.9869 500.6738,704.1899 L500.9188,703.6039 L500.9188,703.6039 C501.4128,701.8389 502.3058,700.3059 503.5968,699.0069 C504.8968,697.7159 506.4298,696.8219 508.1948,696.3269 Z M721.0641,339.0883 C721.6531,338.4123 722.6081,339.2783 722.2421,339.9973 C716.6581,350.9443 710.4341,361.8133 704.3171,372.4823 C704.8071,375.4393 705.2931,378.3723 705.8521,381.2313 C708.2351,393.4173 711.1541,405.3833 713.0571,417.6853 C719.8971,461.9043 723.4481,506.6033 726.4951,551.2193 C729.5511,595.9953 729.9421,640.7913 730.4011,685.6553 C730.4411,689.5433 727.4501,694.0623 723.4421,694.7953 C721.6071,695.1303 720.2341,695.0653 718.4031,694.7953 C714.2321,694.1813 711.6231,689.4033 711.4441,685.6553 C710.2481,660.5813 708.6391,635.5393 706.7751,610.5043 C703.4711,566.1203 701.4521,521.6203 698.7831,477.1903 L697.84312,461.661916 C696.83436,444.835968 695.911629,427.998359 695.6111,411.1473 C695.4111,399.9833 696.0081,388.8223 695.6411,377.6713 C695.3021,367.3763 694.2581,356.1823 696.5281,346.0673 C696.6121,345.6883 697.2111,345.5923 697.3841,345.9553 C699.7441,350.9233 701.2391,356.3233 702.3911,361.8353 C708.4731,354.1433 714.6671,346.4343 721.0641,339.0883 Z M322.6675,67.1404566 C323.5215,67.0792 323.4875,68.3622 322.6675,68.4572 C310.731528,69.8416444 299.201053,74.6988127 287.930881,78.8272193 L286.9655,79.1792 C275.5795,83.3102 264.4785,88.1142 253.7955,93.8402 C232.9085,105.0362 213.7285,119.4722 196.7705,135.9982 C129.0655,201.9702 98.2105,297.1042 75.6015,386.5062 C63.0395,436.1772 54.1065,486.6882 48.3165,537.5862 C45.4535,562.7582 43.4295,588.0262 42.2495,613.3332 C41.6455,626.3032 41.2645,639.2852 41.1055,652.2682 C41.0235,658.9182 40.9995,665.5702 41.0075,672.2202 C41.0115,675.2682 41.5555,679.1052 40.7405,682.0642 C39.9845,684.8052 37.8525,687.2192 36.2755,689.5032 C34.4065,692.2132 31.0475,692.0702 29.1525,689.5032 L28.4537016,688.568935 C26.4326736,685.888196 24.4551897,683.324924 24.1665,679.8212 C23.8575,676.0652 24.0755,672.1932 24.0615,668.4202 C24.0295,660.8192 24.1235,653.2172 24.2755,645.6182 C24.5685,631.0522 25.1425,616.4922 25.9955,601.9482 C27.7275,572.4332 30.5785,542.9782 34.6605,513.6952 C41.9165,461.6452 52.7925,410.0922 67.0385,359.5082 C80.4785,311.7892 96.4005,264.2112 119.0825,220.0092 C140.1425,178.9692 167.7705,140.7902 204.2265,112.1082 C221.1795,98.7702 239.6345,87.6542 259.5315,79.2832 C269.5665,75.0612 280.1045,71.6142 290.8215,69.6492 C301.4195,67.7062 311.9715,67.9772 322.6675,67.1404566 Z M510.2494,611.9806 C512.1424,611.9666 514.2534,612.3826 515.8774,613.4296 L518.0474,615.1066 L518.0474,615.1066 C518.6354,615.8616 519.2204,616.6196 519.8034,617.3796 C521.1604,619.1476 521.3404,622.0086 521.0574,624.1156 C520.9934,625.5226 520.5754,626.8306 519.8034,628.0436 L518.1514,630.1826 L518.1514,630.1826 C516.5634,631.4776 515.2394,632.4016 513.3164,633.0246 C512.3111,633.3495 511.34306,633.41763 510.378017,633.368229 L510.0564,633.3476 L510.2494,633.3736 L509.9114,633.3356 L509.9114,633.3356 C509.5974,633.3086 509.2824,633.2746 508.9664,633.2316 C508.7514,633.2046 508.5354,633.1886 508.3204,633.1586 C508.1134,633.1416 507.9134,633.1336 507.7044,633.1526 C505.2604,633.382704 502.8034,631.9966 501.0684,630.4046 C499.5054,628.9696 498.1024,625.9266 498.3204,623.7696 L498.413386,622.868132 C498.578162,621.347365 498.7131,620.74905 499.3574,619.2216 C499.9834,617.7356 500.8584,616.4246 502.0494,615.3166 C504.3294,613.1956 507.1204,612.0026 510.2494,611.9806 Z M502.6841,500.6974 C505.9281,497.1624 511.4991,496.9024 515.5221,499.0404 C516.5021,499.5624 517.4021,500.3994 518.2661,501.0974 C520.4431,502.8574 521.2981,506.0324 521.4181,508.7074 C521.5371,511.3524 520.1421,514.4934 518.2661,516.3194 L517.8111,516.7604 L517.8111,516.7604 C516.6901,517.8504 515.0841,518.7984 513.5161,519.0864 C510.9871,519.5514 508.8631,519.5374 506.5081,518.5434 C504.484521,517.689821 502.740964,516.317483 501.554618,514.455295 L501.3621,514.1404 C501.280767,514.009733 501.203878,513.876844 501.13173,513.741141 L501.0271,513.5354 C498.7731,509.2014 499.3791,504.2954 502.6841,500.6974 Z M504.3643,388.8279 C505.8273,388.3689 507.2893,388.3039 508.7523,388.6319 C509.7453,388.6339 510.6713,388.8849 511.5293,389.3819 C512.4613,389.6429 513.2713,390.1149 513.9573,390.7979 C514.7833,391.2859 515.4423,391.9439 515.9313,392.7709 C516.9043,393.8339 517.5603,395.0809 517.9013,396.5129 L518.2933,399.4379 L517.9013,402.3639 L516.7913,404.9929 L516.7913,404.9929 C516.4863,405.3909 516.1793,405.7889 515.8693,406.1849 C515.3793,407.0139 514.7193,407.6749 513.8903,408.1649 C513.3513,408.7009 512.7333,409.1019 512.0423,409.3799 C509.5923,411.1359 506.3283,411.7089 503.4253,410.9089 C501.7013,410.4269 500.2043,409.5539 498.9353,408.2929 C497.6743,407.0229 496.8013,405.5259 496.3193,403.8029 L496.120462,402.426754 C495.864317,400.580875 495.823482,399.558445 496.3463,397.2119 C496.5753,396.1799 497.2403,394.7249 497.5883,394.1119 C499.0763,391.4959 501.5073,389.7029 504.3643,388.8279 Z M631.3969,308.3458 C635.5977,308.3162 639.7985,308.32436 643.998788,308.370792 L647.1489,308.4128 C652.4239,308.4958 656.9419,307.9518 661.0889,311.6118 C664.0989,314.2678 662.7729,318.7238 659.9159,320.7248 C655.5869,323.7548 650.1569,322.2308 645.1809,321.8968 C639.9329,321.5448 634.6809,321.2528 629.4269,321.0168 C619.2539,320.5618 609.0769,320.2718 598.8939,320.2268 C588.7329,320.1838 578.5569,320.2798 568.3969,320.4438 C558.0589,320.6118 547.2949,321.5748 537.0149,320.5048 C535.6029,320.3578 535.2849,318.5008 536.6789,318.0178 C546.3659,314.6668 557.2629,313.5808 567.4149,312.2998 C577.8859,310.9768 588.3569,310.0408 598.8939,309.4338 C609.7169,308.8128 620.5559,308.4218 631.3969,308.3458 Z M504.345049,275.431835 L504.6917,275.4386 C506.540633,275.443267 508.271096,275.878262 509.884713,276.743587 L510.2287,276.9356 L512.4487,278.6496 C513.8077,280.0196 514.7487,281.6326 515.2687,283.4906 L515.6607,286.4066 L515.6607,286.4066 C515.7187,287.9166 515.4027,289.3246 514.7167,290.6326 C514.2737,291.9926 513.5177,293.1686 512.4487,294.1626 C511.4547,295.2316 510.2777,295.9876 508.9187,296.4306 C507.711315,297.063831 506.418724,297.381795 505.038565,297.382134 L504.6917,297.3756 C502.7127,297.3686 500.8667,296.8696 499.1567,295.8776 L496.9357,294.1626 L496.9357,294.1626 C495.5767,292.7936 494.6357,291.1806 494.1157,289.3226 L493.7227,286.4066 L493.7227,286.4066 C493.6667,284.8966 493.9807,283.4866 494.6687,282.1806 C495.1107,280.8206 495.8667,279.6436 496.9357,278.6496 C497.9297,277.5806 499.1057,276.8246 500.4667,276.3826 C501.673162,275.748446 502.965682,275.431263 504.345049,275.431835 L504.345049,275.431835 Z M536.8638,17.7614 C539.2268,14.3384 543.5098,17.3824 542.8968,20.1344 C543.0588,27.8634 543.4538,35.3644 545.2128,42.9354 C546.0178,46.4014 547.0728,49.8714 548.6998,53.0464 L549.383143,54.3833659 C551.489237,58.5440331 553.124069,62.4679769 550.2878,67.0324 C548.9508,69.1844 546.5348,70.8004 543.9158,70.6874 C532.3008,70.1864 530.7048,54.0194 529.9988,44.9944 C529.2708,35.6994 531.5348,25.4844 536.8638,17.7614 Z" id="🖍-Ink" fill="${this.strokeColor || "#000000"}"></path>
            </g>
        `);
    }
}