import { Pose } from "../Pose";

export class Device extends Pose {
    build(): string {
        return (`
            <g transform='translate(0 459)'>
            <path d="M743.7183,294.9278 C740.5763,286.3018 745.1643,277.6978 747.7093,269.3528 C756.7503,240.4118 766.6213,211.4698 780.5873,184.4798 C785.8773,175.4518 777.1743,164.3758 767.0893,166.9218 C749.8243,169.3398 732.0213,167.4148 714.7263,166.3478 C708.4013,149.9838 691.5203,143.1958 678.2343,133.7718 C663.1573,124.3618 648.4913,113.5538 632.8113,105.3038 C631.9393,97.5088 622.4873,95.5768 616.7073,101.1528 C600.8323,91.2778 581.7953,93.1118 564.7783,86.6418 C551.847709,65.7412801 550.877543,43.7641635 547.45399,23.6007682 C545.961673,14.8115986 547.547156,6.33119112 541.5413,-1.5052 C521.3663,-29.8802 441.6503,-42.1832 412.2593,-25.3682 C396.4383,-35.2352 396.0573,-17.3652 393.5443,-6.3362 C390.7513,-0.8182 389.2403,5.4308 389.7073,12.0148 C372.7133,47.5098 333.8343,63.5568 299.0153,76.5558 C294.6473,72.3528 288.4043,72.8838 284.2483,76.3618 C254.0683,82.9228 224.7773,94.4558 199.4913,112.4638 C170.7633,120.8658 150.5313,144.2308 135.9013,169.2838 C134.2893,171.9248 133.9093,174.6178 134.3803,177.0908 C89.3913,243.0378 67.9193,321.9868 64.9033,401.7248 C35.9723,419.0878 78.6543,575.0658 88.5903,607.4478 C88.6003,607.4438 88.6103,607.4398 88.6203,607.4348 C95.0663,618.8468 102.3853,651.4108 118.5173,648.8918 C129.5833,661.4038 147.2183,658.9438 162.2353,659.9048 C159.7893,669.2868 160.9913,680.0218 163.9023,689.2928 C167.3453,700.3288 184.2413,700.7028 186.6373,688.6708 C336.1813,717.7248 489.6203,694.5428 640.8453,698.9038 C684.5693,699.2138 728.2893,700.5668 771.9083,703.6818 C778.0503,704.1198 784.2773,697.8438 783.8593,691.7288 C774.4813,591.9568 765.6743,460.7058 755.1873,361.9108 C752.7003,339.3798 750.7333,316.6018 743.7183,294.9278 Z" id="🎨-Background"
            fill="${this.backgroundColor || "#FFFFFF"}"></path>
            <path d="M396.0107,-19.2103 C396.4397,-20.3803 398.1877,-20.2253 398.2207,-18.9113 C398.9097,9.1417 391.9257,43.4227 369.4777,62.3717 C357.954536,72.0986455 342.719778,76.5502425 328.728983,81.6654642 L327.1507,82.2477 L302.4327,91.4557 C295.8767,93.8977 288.8047,97.6547 283.0137,94.2047 C287.6997,105.8247 291.6337,117.7647 297.3407,128.9637 C304.4447,142.9047 313.0337,155.6597 323.5457,167.2607 C365.1917,213.2197 431.1017,227.2387 490.2487,213.7727 C520.7057,206.8377 550.3427,193.6957 571.1217,169.7257 C586.9137,151.5057 595.9867,127.0517 598.1247,102.9307 C597.4997,103.0307 596.8447,103.0267 596.1717,102.8787 C588.688106,101.246356 581.133188,97.2349744 574.547922,93.3010755 L573.9137,92.9207 C567.5777,89.1067 560.9737,84.7357 556.4267,78.8097 C553.416102,74.886435 550.331053,66.5257259 547.171554,53.7275726 C545.880434,46.5128893 544.669392,32.1397 544.8767,24.8467 C544.8957,24.1587 547.9487,23.7527 548.2747,24.4677 C551.095638,30.65895 552.007786,44.262407 554.185309,50.7062327 L554.6247,51.9927 C556.9497,58.7217 558.9437,66.9147 563.7647,72.3547 C572.8157,82.5697 586.4717,86.8937 598.6607,92.0167 C599.5357,80.4717 617.9757,80.7407 617.7417,92.7817 C617.7287,93.4347 617.6997,94.0847 617.6767,94.7357 C619.13095,95.5352 620.529513,96.44945 621.83695,97.3316375 L623.1127,98.1977 C627.9407,101.4817 632.8057,104.6027 637.9467,107.3887 C647.8997,112.7837 658.4367,117.0607 668.6347,121.9577 C678.9517,126.9127 688.6007,132.8157 697.6097,139.8807 C701.841033,143.198117 705.898429,146.731485 709.746456,150.486196 L710.7907,151.5157 C714.4537,155.1637 719.2197,159.2427 721.3067,164.0367 C721.7667,165.0937 724.07115,167.552222 725.321621,167.634203 C744.697642,168.904499 764.032321,170.698268 783.2867,173.3877 C788.2717,174.0837 790.242111,176.652865 788.399527,180.8077 C782.067527,195.0857 757.2787,252.1067 750.6867,267.4097 C751.4567,278.6517 750.4167,291.8867 751.1107,303.1317 C752.1257,319.5417 753.4547,335.9457 755.0477,352.3097 C760.7477,410.8467 769.3887,469.0987 777.1967,527.3797 C781.1047,556.5477 784.6677,585.7587 788.1847,614.9757 C789.9607,629.7407 791.4677,644.5207 792.6277,659.3487 C793.1109,665.5271 793.5493,671.70998 793.935732,677.895292 L794.268771,683.381665 C794.727262,690.286059 795.785308,696.879582 791.5127,702.8057 C789.5757,705.4937 785.1517,707.0077 782.6047,703.9537 C779.4027,700.1147 778.2127,697.2467 777.9067,692.2037 C777.6727,688.3437 777.6167,684.4657 777.4407,680.6017 C777.0607,672.2257 776.5827,663.8537 776.0227,655.4867 C774.9057,638.7607 773.6307,622.0377 772.1537,605.3397 C766.9767,546.7867 757.1377,488.6747 750.5907,430.2657 C747.2907,400.8197 744.9467,371.3187 743.7057,341.7097 C743.0847,326.9237 742.8597,312.1387 743.0057,297.3397 C743.0607,291.8117 743.3227,286.3097 743.7017,280.8197 C733.8937,303.1007 723.5827,325.1667 712.8027,346.9397 L710.247503,352.096176 C703.415945,365.857886 696.400662,379.671313 688.190294,392.645378 L686.779222,394.856733 C683.452412,400.126684 678.908404,408.435663 672.8427,410.0987 C668.6177,411.2577 663.4547,410.4417 659.1227,410.3587 C654.8237,410.2767 650.5197,410.2587 646.2237,410.0847 C641.4047,409.8907 636.8067,409.2577 632.1497,408.0017 C631.3757,407.7937 630.6437,407.5677 629.9767,407.2797 C625.2847,414.9577 617.3127,420.8057 609.1617,424.2127 C602.632805,426.941647 595.790093,428.812401 588.935837,430.544111 L586.5167,431.1507 C579.1687,432.9817 570.7627,433.8517 566.6187,440.9477 L565.656019,442.592414 C562.575073,447.826852 559.619169,452.423919 554.5197,456.1767 C549.0307,460.2177 542.5277,462.7587 536.0497,464.7367 C529.4167,466.7607 522.629089,468.310783 515.894065,469.970803 L514.0587,470.4267 C509.6127,471.5397 505.1267,472.5607 500.7067,473.7717 C498.8217,474.2877 496.9027,474.8197 495.0527,475.4557 C492.8867,476.1997 491.3127,477.3617 489.6037,478.6257 C488.0677,483.9917 481.5027,486.9057 476.1047,486.5317 C473.2697,486.3357 470.7267,485.3737 468.4127,483.9637 C464.3737,487.4017 459.9267,490.4817 455.8097,493.6667 C450.0447,498.1267 444.2567,502.5557 438.4367,506.9437 C426.4367,515.9887 414.3457,524.9137 402.1287,533.6627 C380.4437,549.1927 358.2897,564.0117 335.7567,578.2817 C326.3617,584.2317 316.9037,590.1717 307.3527,595.9697 L308.371996,596.347552 L310.3937,597.1117 C315.1727,598.8957 320.4977,601.7787 321.4237,607.3537 C322.1577,611.7757 319.6877,614.8237 315.3217,615.3637 C310.1327,616.0047 306.0947,612.3387 302.8637,608.8387 C301.4377,607.2957 299.8417,605.8617 298.4757,604.2727 C297.9187,603.6237 297.4907,602.8757 297.1137,602.0917 C287.688162,607.645854 278.162079,613.013404 268.485114,618.032326 L266.0627,619.2797 C242.0657,631.5507 218.7087,644.9947 194.5077,656.9167 C188.1947,660.0267 180.4977,663.3907 172.4747,665.6867 C174.6037,673.9387 174.5707,682.9987 174.6247,691.3737 C174.6757,699.5357 161.7047,699.4967 161.9787,691.3737 L162.110686,687.451223 C162.346867,680.854533 162.7327,674.007033 164.2977,667.5887 C140.6591,671.5091 117.044486,662.988914 112.6477,660.4307 C107.7947,657.6087 103.3897,653.0927 99.7237,648.9037 C91.8787,639.9367 86.4347,629.1887 81.6047,618.3757 C71.2587,595.2197 63.9287,570.4677 58.5697,545.7137 C38.8127,454.4477 47.3107,356.7657 79.3957,269.2797 C87.4117,247.4207 96.8757,226.0437 107.7207,205.4407 L109.067325,202.893688 C119.889383,182.519156 131.9173,162.22226 147.1957,144.8837 C163.1097,126.8247 182.7407,112.7797 204.1147,101.8777 C214.5457,96.5577 225.2787,91.9467 236.2487,87.8607 C238.0107,87.2037 239.7847,86.6147 241.5627,86.0537 C252.9947,78.7657 266.8687,71.7937 280.7477,72.0677 C281.6907,72.0847 282.4547,72.4427 283.0247,72.9817 C283.6937,73.0987 284.3627,73.2407 285.0327,73.4357 C286.5117,73.8647 288.0737,75.4857 287.8617,77.1507 L287.789716,77.704668 C287.75062,77.97522 287.7013,78.2367 287.6167,78.4917 C288.1127,78.5657 288.5997,78.6837 289.0767,78.8467 C302.3557,75.0967 315.4207,69.3617 328.3787,64.7357 L331.329708,63.6936433 C342.182589,59.8903042 353.317033,56.16245 362.2197,48.6357 C371.0767,41.1477 377.7367,31.4487 382.5517,20.9637 C388.4837,8.0457 391.1397,-5.9483 396.0107,-19.2103 Z M661.8699,662.1102 C664.4989,660.1542 667.6079,662.4242 668.5919,664.8452 C671.8219,672.7902 670.2259,685.1362 665.6729,692.1612 C660.9549,699.4392 649.6619,696.5662 649.3889,687.7502 C649.1039,678.5572 654.4479,667.6352 661.8699,662.1102 Z M689.0281,442.7231 C689.2641,441.6901 690.8681,441.7001 691.1081,442.7231 C693.297029,452.045814 693.245956,462.085441 693.888682,471.64407 L693.9631,472.7041 C694.7341,483.2451 695.3821,493.8151 695.8441,504.3741 C696.7511,525.1491 697.8351,545.9251 699.0501,566.6841 C699.6531,576.9781 700.2991,587.2711 700.9881,597.5611 C703.1461,596.3581 705.3691,595.3021 707.6731,594.3701 C711.1251,592.9751 714.4861,592.8151 718.1951,592.8531 C722.7121,592.8991 726.1131,596.8721 725.5151,601.2971 C724.8631,606.1161 720.6201,608.1811 716.2141,607.4931 C711.3341,606.7291 706.4331,605.5461 701.5061,605.0561 C702.0551,613.0121 702.6221,620.9661 703.2231,628.9151 C704.0201,639.4401 705.0591,649.952095 705.7891,660.4811 C705.8591,661.4851 705.9341,662.4911 706.0111,663.5001 C708.9491,661.9721 712.0691,661.1901 715.6051,660.2271 L716.52507,659.969109 C721.658849,658.494714 727.151213,656.456213 731.9031,659.9081 C735.0971,662.2291 735.7351,666.0491 733.0891,669.1101 C729.077251,673.754779 723.141124,672.853804 717.599363,672.616982 L714.618138,672.508232 C711.808304,672.397643 709.216041,672.217982 706.6191,671.5091 C707.0961,678.3681 707.3471,685.2531 706.5061,692.0121 C706.0511,695.6651 701.2421,696.6241 699.9691,692.8961 C696.6441,683.1571 695.9571,672.6541 694.7401,662.4531 C693.603736,652.925827 692.912827,643.329133 692.1685,633.759186 L691.9431,630.8891 C690.2691,609.8351 688.9301,588.7701 687.9521,567.6731 C686.9731,546.5791 686.3851,525.4891 686.1511,504.3741 C686.044736,494.786827 686.203662,485.164844 686.579041,475.578773 L686.6981,472.7041 C687.1301,462.8451 686.8281,452.3831 689.0281,442.7231 Z M249.6045,663.6645 C249.7325,662.3175 250.8115,660.6435 252.4165,660.8525 C253.8955,661.0445 255.4195,660.9525 256.8825,661.1965 C258.8135,661.5165 260.3675,662.6575 262.1635,663.3755 C265.0825,664.5425 268.2645,665.1455 271.2595,666.1005 C276.8785,667.8935 279.9405,673.8085 277.6135,679.3325 C275.1665,685.1395 269.0175,686.4575 263.7045,684.0205 C259.516574,682.100352 256.39504,679.030355 253.579103,675.477544 L252.781288,674.464409 C251.567815,672.937957 250.190618,671.234912 249.6815,669.3855 C249.1865,667.5835 249.4305,665.4975 249.6045,663.6645 Z M522.6018,636.3648 C529.600642,635.379432 535.578423,637.772004 542.054584,640.027308 L542.5808,640.2098 C549.1718,642.4848 558.7888,644.0598 562.1668,650.8058 C564.2048,654.8738 562.6218,660.2758 557.8258,661.4798 C550.230059,663.384386 543.419524,657.832884 537.138873,654.095765 L536.8088,653.9008 C530.7468,650.3498 524.4898,647.3648 520.6188,641.2398 C519.5858,639.6058 520.4818,636.6638 522.6018,636.3648 Z M278.2827,79.7717 C275.4787,80.3997 272.6747,80.9547 269.8737,81.4887 C259.2187,87.1997 248.8767,93.1257 237.8757,98.2137 C226.2037,103.6127 214.5747,109.1887 203.4877,115.7197 C181.0887,128.9147 162.6237,146.0707 147.3657,167.0997 C121.0097,203.4247 101.4047,245.3157 87.3737,287.8207 C83.7687,298.7407 80.5427,309.7837 77.6887,320.9197 C82.7347,316.2527 88.7087,313.3837 95.4077,310.9267 C98.2467,309.8857 101.7807,311.6477 103.2197,314.1057 C103.8667,315.2097 104.2317,316.3017 104.1647,317.5967 C104.0157,320.4547 102.1557,323.7017 99.0857,324.2677 C91.9287,325.5867 84.9697,328.1547 78.0687,330.4147 C77.0227,330.7577 76.1237,330.6277 75.4057,330.2237 C68.5547,359.2427 64.2687,388.8587 62.7507,418.6537 C61.4667,443.8777 62.2587,469.2997 65.0527,494.4887 C67.1997,493.5237 69.2997,492.6187 71.6537,492.0707 C74.7067,491.3607 77.7097,490.4967 80.6877,489.5207 C89.2817,486.7017 93.2017,500.8897 84.4177,503.0517 C81.1487,503.8567 77.8597,504.5247 74.5287,505.0137 C71.6257,505.4397 69.0577,505.2517 66.3207,504.8057 C68.4117,520.5207 71.2677,536.1217 74.9057,551.5007 L75.7084654,554.865952 C80.4341288,574.508628 85.9418351,594.334403 93.9067,612.8967 C97.8137,622.0027 102.9867,630.6507 109.3737,638.2427 C112.5117,641.9757 115.9947,645.1757 119.7927,648.2077 C122.9547,650.7327 133.702997,656.207659 146.4326,656.207659 C159.162203,656.207659 162.608342,655.003313 169.0307,652.7927 C181.731733,648.421433 193.790803,641.442132 205.702013,635.225898 L206.9337,634.5857 C212.2007,631.8607 217.4477,629.0967 222.6807,626.3067 C222.0197,620.9717 223.1767,616.4907 225.9567,611.5627 C228.961662,606.232175 236.407487,608.887205 236.961016,614.339323 L236.9787,614.5477 C237.0627,615.7767 237.2687,617.0297 237.5247,618.2787 C272.5157,599.1117 306.7657,578.6017 340.4707,557.2297 C362.1817,543.4617 383.6617,529.2837 404.8277,514.6907 C415.4087,507.3957 425.8977,499.9697 436.2827,492.3977 C441.7227,488.4307 447.1377,484.4327 452.5277,480.3997 C454.7727,478.7197 456.9747,476.9557 459.2247,475.2667 C458.6777,474.5827 458.1447,473.8997 457.6287,473.2237 C449.2267,462.2237 443.7757,449.1117 441.0597,435.5847 C439.4197,427.4227 438.6277,418.9497 438.3867,410.6277 L438.280719,407.009589 C438.1147,400.912644 438.071367,394.532367 439.1947,388.6257 C437.6657,389.4657 436.1037,390.2897 434.5467,391.1717 C428.9597,394.3367 423.3677,397.4947 417.7667,400.6377 C406.5507,406.9287 395.3017,413.1477 383.9097,419.1157 C363.5617,429.7767 343.0137,439.9167 321.9107,449.0047 L311.642415,453.430614 C293.821205,461.096359 275.854474,468.623345 257.3257,474.3207 C246.8747,477.5337 236.3447,480.2797 225.7437,482.7317 L230.0307,487.7537 C232.9377,491.1597 232.9887,496.0437 229.2737,498.9107 C225.6217,501.7297 220.7217,500.5557 218.2887,496.8137 L213.8537,489.9917 C212.9057,488.5337 212.3677,487.1677 212.0627,485.7287 C207.1795,486.7503 202.2835,487.73158 197.374188,488.68022 L188.093408,490.451954 C174.841192,493.009777 161.992329,498.074229 150.146857,504.555829 C146.02895,506.809063 144.881637,502.431522 149.244699,499.381413 C162.002195,490.462962 176.883312,485.416214 192.237475,481.181 L192.9917,480.9737 C198.6247,479.4307 204.2477,477.8227 209.8587,476.1567 C209.2417,473.9247 208.8857,471.6087 208.9567,469.0547 C209.1147,463.3657 209.6177,457.6567 209.9197,451.9717 C210.5537,440.0397 211.3627,428.1457 212.3107,416.2357 C212.6747,411.6477 213.0827,407.0467 213.5497,402.4497 C210.540858,400.836332 207.945766,398.695229 204.591054,397.641905 L204.0247,397.4767 C200.4367,396.5097 201.6477,391.8867 204.8347,391.4907 C207.7217,391.1337 210.5947,391.2977 213.4407,391.9087 C213.8817,392.0047 214.2987,392.1117 214.6967,392.2327 C215.2197,387.9747 215.7997,383.7277 216.4587,379.5047 C218.2017,368.3467 219.4347,356.5907 223.0627,345.8697 C223.3317,345.0757 224.5107,344.7917 224.9477,345.6237 C230.225585,355.664085 230.409164,367.980727 231.003994,379.161658 L231.0777,380.4977 C231.7787,392.6957 231.8187,405.0127 231.5927,417.2277 C231.3607,429.8157 230.9297,442.3717 230.3647,454.9487 C230.1377,460.0127 230.1467,465.2667 229.2837,470.1097 C260.6917,459.8997 291.5447,447.6787 321.1177,433.2077 C341.9787,423.0007 362.6597,412.3847 383.1047,401.3697 C393.3487,395.8517 403.6407,390.4227 413.8737,384.8837 C417.459033,382.942367 421.0417,380.994811 424.622885,379.043996 L429.9937,376.1157 C435.0197,373.3727 439.2147,370.6437 445.0687,370.4517 C446.8137,370.3937 448.3787,371.2117 449.4897,372.4487 C452.6357,370.2177 456.2717,368.8477 460.0877,368.8797 C465.8317,360.9457 471.6637,353.0767 477.7277,345.3787 L482.207638,339.67924 C489.961612,329.846378 498.175258,319.864351 508.0627,312.3797 C512.4757,309.0407 517.3297,306.5357 522.3917,304.4657 C521.2007,304.1747 520.0347,303.5897 518.9957,302.6257 C514.1607,298.1427 513.4947,289.8157 512.5127,283.5597 C511.4937,277.0727 511.8877,271.2667 512.8937,264.8007 C513.2847,262.2877 517.4467,261.7647 518.4627,264.0727 C520.603609,268.939064 522.870964,273.602948 524.819236,278.524158 L525.3937,280.0087 C527.4847,285.5487 531.9387,291.3767 531.6447,297.3867 C531.5647,299.0337 531.0127,300.4687 530.1607,301.6227 C534.4097,300.2117 538.7197,298.9537 542.9637,297.6417 C556.3207,293.5147 569.7287,289.5037 583.3427,286.3017 C586.9667,285.4497 590.6087,284.6587 594.2657,283.9327 C596.1817,274.8367 598.9737,265.9087 602.2657,257.1417 C599.1487,255.5447 597.1307,252.8677 594.4467,250.4867 C591.9347,248.2567 590.2087,245.5417 588.0657,242.9817 C586.1147,240.6527 587.2107,236.4447 590.7167,236.5807 L591.710034,236.622411 C595.342179,236.791103 598.860117,237.166783 602.1537,238.8617 L603.326956,239.466604 C604.93646,240.30238 606.6979,241.2595 608.2667,242.3907 C610.317533,237.671533 612.450311,232.997506 614.606006,228.370931 L617.403076,222.388119 C624.655349,206.816197 631.887635,190.6517 640.9927,176.1517 C645.0407,169.7057 650.4277,165.6807 658.1597,165.0577 C666.1217,164.4167 674.3997,165.2447 682.3727,165.5297 C691.6157,165.8607 700.8557,166.2527 710.0897,166.7377 C707.7227,164.2587 705.5627,161.4987 703.1857,159.1197 C699.2397,155.1747 695.0707,151.4347 690.6887,147.9777 C682.0157,141.1367 672.4797,135.4997 662.5747,130.6457 C652.6677,125.7907 642.4697,121.5577 633.1697,115.5597 C627.2847,111.7647 622.0247,106.9887 617.2257,101.8207 C614.2047,134.4107 598.4677,164.6887 574.8257,187.4367 C550.2697,211.0617 516.3357,224.0417 483.1397,229.5627 C449.2797,235.1947 413.9407,233.1277 381.5497,221.3587 C364.8487,215.2897 348.8307,206.6197 334.5457,195.7447 C334.3887,196.6907 334.1997,197.6257 333.8287,198.5047 C333.330825,199.68595 332.721934,200.691872 332.023466,201.729471 L330.778338,203.550169 C329.992741,204.694455 329.192129,205.829557 328.3007,206.8917 C326.1417,209.4627 323.0827,210.5887 319.7877,210.5767 C313.4787,210.5557 308.7007,204.3697 310.3987,198.2517 C311.4657,194.4067 313.7487,192.0927 317.3127,190.5877 C318.4391,190.1117 319.58726,189.71314 320.74182,189.320852 L321.6087,189.0267 C322.7757,188.6277 323.9337,188.2467 325.1347,188.0257 C318.3707,182.0557 312.0947,175.5637 306.4747,168.5577 C288.8477,146.5867 271.4617,115.8157 277.3547,86.6367 C277.4567,86.1357 277.9077,85.8207 278.3937,85.7407 C278.7357,83.6927 279.8257,81.7117 281.3187,80.3797 C280.3137,80.1157 279.3007,79.9117 278.2827,79.7717 Z M461.3215,584.2665 C464.8125,582.3255 468.4185,586.9385 465.5815,589.7875 L461.345781,594.025139 C457.414769,597.975564 453.588658,601.968395 450.2235,606.4705 L449.408688,607.570912 C444.866616,613.750151 440.022953,620.910066 432.5805,623.2195 C423.5785,626.0125 414.9275,615.0475 420.1405,607.0375 C424.6945,600.0375 433.4635,597.3965 441.0235,594.5025 C448.1755,591.7645 454.6355,587.9835 461.3215,584.2665 Z M170.9206,551.9637 C172.9716,549.2787 178.3196,550.6927 176.9186,554.4927 C172.3676,566.8307 170.5126,583.6547 159.0186,591.8517 C155.3106,594.4947 149.4856,593.2797 146.4326,590.2277 C142.9636,586.7587 142.8246,581.8737 144.8086,577.6417 C147.228276,572.479141 153.179667,568.736239 157.351402,564.803765 L157.7256,564.4457 C162.2136,560.0867 167.0676,557.0077 170.9206,551.9637 Z M651.30781,566.163712 C654.968617,564.585733 664.5101,561.517533 667.3376,565.1493 C667.4696,565.2823 667.5826,565.4273 667.6736,565.5873 C668.3666,566.7933 668.4696,568.4923 667.6736,569.6883 C664.378636,574.639907 660.946984,578.336221 656.26233,581.86038 L655.7366,582.2513 C650.6366,586.0003 645.8456,590.4043 639.6316,592.0953 C631.0186,594.4393 625.0026,583.6553 631.0516,577.3583 C635.924933,572.285689 643.36448,569.651738 649.821961,566.82304 L651.30781,566.163712 Z M305.4238,495.6646 C303.9828,493.0616 306.9268,489.8666 309.5928,491.4956 C317.1978,496.1436 326.0568,499.6306 334.5988,502.1356 C338.0558,503.1496 341.1748,506.6536 340.9178,510.4346 L340.877525,511.007092 C340.775738,512.342944 340.59155,513.669225 339.7428,514.7796 C336.7678,518.6706 332.5118,520.1696 327.9668,517.8666 C317.8378,512.7346 310.9048,505.5696 305.4238,495.6646 Z M527.7012,487.779 C527.5162,486.684 528.3172,485.839 529.4302,486.05 C535.8572,487.268 541.7932,490.372 547.3122,493.94 C550.2722,495.854 553.1272,497.956 556.0802,499.889 C559.7282,502.275 561.0942,504.246 561.6332,508.626 C561.9892,511.516 559.2902,514.156 556.8152,514.954 C550.069409,517.129045 542.340631,509.991429 537.770733,505.354028 L537.5652,505.145 C532.7812,500.269 528.8352,494.503 527.7012,487.779 Z M720.7323,480.2037 C719.2673,476.2477 724.3163,472.9677 727.6183,474.9107 C730.7273,476.7397 734.1003,478.2567 737.0333,480.3527 C739.728411,482.279811 742.185695,484.562478 744.770364,486.651476 L746.047647,487.662638 C750.787568,491.47288 758.611553,500.897258 751.8343,506.3637 C745.383881,511.566816 736.831736,504.921844 732.50228,500.063502 L732.2003,499.7197 C729.7093,496.8427 726.6383,493.7167 724.8313,490.3557 C723.1303,487.1927 721.9763,483.5617 720.7323,480.2037 Z M657.1217,173.9567 C649.0427,175.5247 645.7497,185.4967 642.3477,191.9967 C634.3187,207.3367 626.9347,222.9577 619.5187,238.5987 C617.2357,243.4097 615.0127,248.2577 612.7697,253.0967 C612.6327,253.4757 612.4567,253.8487 612.2497,254.2177 C607.6547,264.1107 602.9227,273.9387 597.3917,283.3297 C602.4537,282.3817 607.5417,281.5737 612.6487,280.9377 C612.391061,276.129089 615.683654,269.693761 617.312298,265.645734 L617.4477,265.3047 C619.4787,260.1167 621.6077,251.9447 626.8357,249.2527 C628.5777,248.3567 630.4407,249.4797 630.5747,251.3977 C630.9707,257.1077 625.3857,263.6427 622.6557,268.4887 C621.0047,271.4207 619.3957,274.3657 617.8277,277.3427 C617.2397,278.4567 616.7487,279.5517 616.1457,280.5337 C618.7797,280.2487 621.4167,279.9947 624.0607,279.8097 L625.783732,279.691803 C635.585876,279.04562 645.996644,278.861033 654.8527,283.6947 C663.0697,288.1777 667.2697,297.7487 662.7557,306.4637 C657.1317,317.3207 644.7477,318.7597 633.8577,319.6397 C620.2557,320.7367 606.6227,322.7177 593.1167,324.6497 C579.1467,326.6477 565.9917,331.7977 552.2297,334.4447 C550.9497,334.6907 550.1527,333.0167 551.3267,332.3017 C562.182305,325.694279 575.379621,322.058081 587.516057,318.354221 L588.4977,318.0537 C595.0807,316.0317 601.5147,313.7217 608.3247,312.5747 C614.9357,311.4617 621.5877,310.5597 628.2557,309.8737 L628.903287,309.813864 C636.244888,309.198302 654.97422,309.40852 654.1827,298.5387 C653.6587,291.3447 641.9647,290.1027 636.6267,290.0167 C612.1527,289.6247 587.5027,296.1207 564.2437,303.0807 L559.051281,304.637561 C549.527144,307.503209 539.989623,310.451469 530.6447,313.8107 C520.0547,317.6167 511.7117,323.5517 503.9987,331.6747 C495.4467,340.6817 487.1637,349.8917 478.2917,358.5947 C472.6987,364.0817 467.0337,369.4707 461.3227,374.8157 C460.0327,376.4857 459.0007,378.3027 458.2857,380.6597 C457.0777,384.6417 457.3557,388.3427 457.8117,392.4327 C458.9617,402.7617 459.2157,413.1977 460.6567,423.4947 C461.9927,433.0337 463.8607,442.9227 467.8217,451.7717 C469.390137,455.276075 471.431427,458.718048 473.756053,461.796043 L475.632358,464.235271 C476.450292,465.294854 477.365085,466.454238 478.3257,467.5447 C479.7357,465.8247 481.7757,464.7057 484.1467,464.9857 C489.1857,465.5787 493.1467,465.4367 498.0897,464.2787 C501.9157,463.3837 505.7117,462.3347 509.5207,461.3637 C516.9997,459.4557 524.5487,457.7197 531.9517,455.5287 L533.224364,455.145325 C538.741215,453.453164 544.259914,451.3337 548.8517,447.7717 C554.1867,443.6327 555.8277,437.6617 559.7797,432.4987 C568.2177,421.4737 586.4517,421.7047 598.7977,418.6847 C609.289969,416.119008 619.386894,412.070053 626.647873,404.457616 L627.071575,404.0042 C626.7497,402.6457 627.2717,401.1127 628.5337,400.4087 L628.8087,400.2557 C629.3007,399.9807 629.8307,399.8667 630.3507,399.8777 C631.0247,398.8877 631.6747,397.8657 632.2657,396.7777 C632.7517,395.8807 633.9667,396.5407 633.8077,397.4267 C633.7127,397.9557 633.5807,398.4717 633.4557,398.9887 C640.4892,397.1797 648.213576,397.525155 655.354706,397.529722 L664.621964,397.497312 C666.225766,397.477613 668.6162,397.397129 668.8287,397.3007 L669.046603,397.203879 C669.624394,396.953022 668.804064,397.367155 669.2077,396.8317 C669.6527,396.2407 670.0887,395.6427 670.5187,395.0397 C672.0547,392.8907 673.5077,390.6767 674.9317,388.4427 C659.4127,392.3957 643.3367,394.8557 627.4907,396.9067 C610.4907,399.1097 593.2667,400.6377 576.1147,400.6537 C571.3867,400.6587 571.4297,393.5207 576.1147,393.3417 C594.2767,392.6487 612.3437,391.6867 630.3837,389.3597 C639.7127,388.1547 649.0027,386.6437 658.2407,384.8757 C661.8071,384.1949 665.36518,383.47122 668.914428,382.706708 L671.5747,382.1257 C673.2437,381.7567 677.9597,381.2257 680.2597,379.6827 C680.7117,378.9057 681.1637,378.1307 681.6117,377.3547 C681.3917,374.6297 674.4637,374.9947 672.8397,374.9907 C668.2347,374.9817 663.6287,375.0187 659.0227,375.0307 C649.8117,375.0577 640.6017,374.9777 631.3897,374.9037 C612.9857,374.7537 594.5117,374.1117 576.1227,374.8977 C571.6587,375.0877 569.3137,367.9287 573.7257,366.0457 C593.2037,357.7297 614.8257,355.9227 635.6237,353.3657 C646.5607,352.0227 657.5037,350.4707 668.1957,347.7507 L670.839187,347.078252 C677.555863,345.356382 684.972818,343.256641 690.6287,339.1537 C682.127675,335.714875 671.560942,336.10897 662.749015,335.621978 L662.0747,335.5827 C649.7357,334.8247 637.3747,334.4367 625.0127,334.4187 C599.7187,334.3837 574.4167,335.2797 549.1507,336.4787 C548.5167,336.5087 548.3857,335.5077 549.0017,335.3737 C574.9707,329.7077 601.3637,326.9777 627.9397,326.5577 C640.316629,326.361771 652.699593,326.536608 665.066174,327.083812 L669.603672,327.293587 C680.147507,327.747942 691.847276,327.870785 700.6687,334.2377 C702.0137,335.2077 702.7227,336.4467 702.8337,337.7577 C714.6647,314.1747 725.5917,290.0987 736.5627,266.1827 C745.0917,247.5867 753.3027,228.8347 762.1427,210.3837 L765.004484,204.414644 C768.83658,196.44962 772.7625,188.4837 777.1217,180.8077 C760.8207,178.6287 744.4287,177.1157 728.0267,175.9577 C713.081233,174.901167 664.3167,172.5617 657.1217,173.9567 Z M649.9034,429.5516 C651.7624,428.5186 654.6104,429.3606 655.0684,431.6526 C655.4094,433.3596 655.9914,435.2546 655.9914,437.0006 C655.9914,439.0926 655.2434,441.3656 654.8444,443.4116 C653.9274,448.1176 652.7984,451.9416 650.4054,456.1336 C648.9084,458.7566 645.8854,460.5376 642.8474,460.4676 C640.4414,460.4126 638.3094,459.7666 636.6584,457.9046 C634.6804,455.6736 633.3224,452.3926 634.4074,449.3886 C637.2494,441.5186 642.4734,433.6776 649.9034,429.5516 Z M255.6064,421.7002 C259.9564,414.0812 270.2674,407.2722 279.2654,407.9462 C292.7764,408.9582 295.5334,427.1502 282.4524,431.4912 C274.6334,434.0852 263.8764,431.4212 257.0364,427.1512 C255.1924,426.0012 254.5164,423.6092 255.6064,421.7002 Z M116.7473,395.6709 C115.7593,394.2349 117.3923,392.5939 118.8643,392.9169 C122.1293,393.6339 125.6493,393.9469 128.8473,394.9209 C132.1223,395.9169 135.2923,397.5689 138.5363,398.7059 C145.3323,401.0859 152.5913,402.2809 159.1683,405.1549 C161.7973,406.3039 163.8653,410.1109 163.6223,412.9179 L163.560317,413.574358 C163.414771,414.967469 163.173433,416.182767 162.3943,417.4559 C160.3013,420.8739 156.1543,422.6399 152.2403,421.5879 C144.9793,419.6379 137.8843,414.6269 131.6933,410.4639 L130.549269,409.70388 C127.844425,407.921369 124.935925,406.058275 122.7563,403.7649 C120.4813,401.3699 118.6113,398.3829 116.7473,395.6709 Z M366.3448,367.9615 C365.5088,364.9515 369.2538,362.9625 371.4368,364.9965 C375.7988,369.0605 380.3598,372.8285 384.6318,376.9955 L384.918635,377.279501 C387.977874,380.3536 392.428492,386.277777 388.4498,390.2555 C383.3518,395.3535 376.2528,387.7895 373.5178,383.8475 C370.0488,378.8475 367.9678,373.8085 366.3448,367.9615 Z M700.1497,343.0747 C693.6787,349.9287 683.7087,353.0797 674.9307,355.6907 C664.5227,358.7837 653.7987,360.6317 643.0637,362.1517 C632.6907,363.6197 622.3977,364.9327 612.1897,366.6177 C619.9117,366.7137 627.6327,366.7707 635.3367,366.9087 C644.2217,367.0697 653.1017,367.2617 661.9837,367.5197 C668.4527,367.7077 676.0427,366.8207 682.1897,369.2247 C683.2977,369.6567 684.3327,370.2567 685.2367,370.9867 C690.4047,361.7977 695.3577,352.4817 700.1497,343.0747 Z M301.0089,278.9808 C307.7629,276.8358 314.1139,273.9888 321.2739,274.7278 C323.1769,274.9228 324.5399,276.7758 323.5009,278.6058 C320.1077,284.577171 314.590291,287.947779 309.158864,291.941696 L308.6799,292.2958 C302.7349,296.7178 296.3519,300.7468 289.8869,304.3758 C278.7559,310.6218 268.7809,292.7448 280.0219,287.4988 C286.7859,284.3418 293.8909,281.2428 301.0089,278.9808 Z M422.6086,263.4602 C432.9416,264.1402 443.2686,264.6022 453.6146,265.0202 C465.5986,265.5052 461.5696,283.9462 451.5586,280.2142 C441.6686,276.5262 431.7776,272.8852 421.7986,269.4452 C418.760855,268.398582 419.005417,263.409339 422.415874,263.452564 L422.6086,263.4602 Z M157.5821,230.6528 C160.2601,230.4648 162.9611,231.0498 165.6431,231.3098 L168.496937,231.586597 C174.379792,232.171985 179.895755,232.893834 185.5061,235.2878 C195.8581,239.7058 190.2981,256.3468 179.9061,255.9648 C172.2251,255.6828 165.6571,252.3838 159.1711,248.5438 C153.5011,245.1868 150.0251,240.9868 146.1961,235.7158 C144.9281,233.9698 146.6951,232.0128 148.4221,231.8368 C151.4641,231.5268 154.5391,230.8658 157.5821,230.6528 Z M676.4996,196.6691 C674.7866,207.3581 670.5346,217.3761 664.1276,226.0981 C660.9076,230.4811 655.2546,230.6471 652.0636,226.0981 C647.54941,219.662894 650.332911,212.290174 653.733597,206.109238 L654.739768,204.299413 C656.262594,201.585734 658.601324,197.627617 661.2736,194.8941 L661.3186,194.6141 C662.7506,183.4231 678.2646,185.6571 676.4996,196.6691 Z M258.5651,128.0711 C261.1411,125.7511 265.8851,126.4481 266.7211,130.2241 C267.8911,135.5121 268.6031,141.4701 267.8371,146.8381 C267.4221,149.7471 267.2661,153.0141 266.1221,155.7251 C264.8921,158.6401 262.5261,160.8821 260.2971,163.0741 C255.8471,167.4501 246.4661,166.0031 245.2741,159.1081 L245.122706,158.262385 C244.523212,154.999774 243.7563,151.5129 244.6441,148.2791 C245.314233,145.839367 246.811922,143.350851 248.050949,141.087547 L248.3121,140.6061 C250.7941,135.9841 254.6631,131.5831 258.5651,128.0711 Z M620.6564,139.32149 L621.58807,139.3314 C628.778397,139.473427 641.923546,141.223812 641.993675,150.1085 C642.0104,152.2025 640.4594,154.3725 638.3804,154.8545 C634.0824,155.8505 631.3044,153.3115 628.2414,150.7455 C625.7364,148.6475 622.8164,146.9725 619.7834,145.7665 C616.5074,144.4635 616.7214,139.3155 620.6564,139.32149 Z" id="🖍-Ink"
            fill="${this.strokeColor || "#000000"}"></path>
            </g>
        `);
    }
}