import { Hair } from "./Hair";

export class NoHair extends Hair {
    build(): string {
        return (`
            <g id="head/No-Hair-1" transform="translate(20, 45) scale(4.5)" fill-rule="evenodd">
                <path d="M84.7643673,47.3890709 C82.8563158,39.3253229 78.684738,31.8210772 72.0061755,25.7563303 C51.9089461,5.83741057 15.0018329,16.6490348 15.1690147,46.6654262 C14.4482147,50.1713049 14.1555939,53.7760955 14.3942443,57.3515084 C14.4929089,58.8770348 15.1515165,61.0059663 14.266697,62.3788978 C12.2708461,64.947438 11.1109041,66.8407139 11.7901722,70.2574027 C12.3577048,73.2406121 14.3828599,75.3541151 17.1159549,76.4776532 C18.7550951,76.9491757 20.3103282,77.9763382 20.9174953,79.5420211 C24.565979,86.2384438 27.2689265,91.8083695 33.0207802,96.3720564 C34.5049663,97.5469526 49.7275448,104.593794 54.7432356,104.593794 C69.4272402,104.593794 87.934402,99.2614262 88.2415695,82.8183734 C88.2946966,79.2068196 87.6624418,75.553207 87.2658858,71.9701855 C86.3005665,63.7934533 86.6411353,55.3206091 84.7643673,47.3890709 Z"
                id="✋-Skin"
                fill="${this.skinColor || "#FFFFFF"}">
                </path>
                <path d="M84.4339575,43.355744 C84.4385956,43.2559867 84.5811112,43.2335836 84.6087288,43.3320728 C85.1545467,45.2733252 85.4638224,47.2509299 85.8907368,49.2224055 C86.3018395,51.1213879 86.6899626,53.0258654 87.0129417,54.9415444 C87.622444,58.5570001 88.1360211,62.1818202 88.6136988,65.816171 L88.7324051,66.7249573 C89.5626217,73.1197832 90.9338073,79.7817558 89.7348632,86.2139906 C88.7117445,91.7025464 85.2814615,96.126108 80.8607372,99.3692783 C76.6748685,102.439987 71.5997531,104.410617 66.5606882,105.530985 C61.1522633,106.733779 54.7415912,107.092652 50.3411058,103.11673 C48.5794781,101.524629 50.9809503,98.3657871 52.8920507,99.8025464 C57.3796034,103.175443 63.088319,102.181115 68.151994,100.83899 L68.3052393,100.798218 C72.7495757,99.6114857 77.2234271,97.8126834 80.7517423,94.7781159 C84.6525798,91.4229299 86.5813893,86.7664603 86.804228,81.6593918 C86.9292529,78.7900625 86.6624097,75.924074 86.374577,73.0716598 L86.3425281,72.7547812 C86.0121702,69.4928008 85.665579,66.2322998 85.3457622,62.9690513 C85.0539566,59.99338 84.8021865,57.0004025 84.6691273,54.0114263 L84.6070354,52.5038855 C84.4777279,49.4644407 84.3036421,46.3805802 84.4339575,43.355744 Z M31.803853,18.1010959 C39.1063017,14.289816 47.4986996,12.9257613 55.625462,14.2048532 C63.4380997,15.4344892 70.6081523,19.4759295 75.9674557,25.2709432 C78.5839662,28.1002896 80.9063801,31.3730489 82.3905663,34.9484618 C83.1278104,36.7246497 83.7050408,38.5775577 84.0124191,40.4805558 C84.1705355,41.4588963 84.3259113,42.4725323 84.3556371,43.4643992 C84.383044,44.3827162 84.1140353,45.2439687 84.1458694,46.1775029 C84.1507183,46.323546 83.9274579,46.3516556 83.8935156,46.2117417 C83.639686,45.1708415 83.0280917,44.383773 82.6443958,43.3950763 C82.3576078,42.6568297 82.0323044,41.9360992 81.7011203,41.2175705 L81.4165691,40.6018708 C80.590569,38.8123679 79.60329,37.0964149 78.6265522,35.386591 C76.6597947,31.9428493 74.1362567,28.8131742 71.181377,26.1723523 C65.9932611,21.5357495 59.3374031,18.542818 52.3906108,18.0038748 C45.1802913,17.4442192 37.8668798,19.1671468 31.7091939,22.9837104 C25.5519297,26.8000626 20.896139,32.7326654 18.4788552,39.5632955 C17.2592505,43.0102074 16.5856746,46.601683 16.4290339,50.2533933 C16.3497649,52.101863 16.4237634,53.9657613 16.5529972,55.810638 L16.6171897,56.6903966 C16.692409,57.7454264 16.7439652,58.7963928 16.5867287,59.8258708 C17.6973384,59.4786223 18.8614969,59.3346928 20.0298719,59.5065205 C21.7659901,59.7618317 22.8032339,60.4753503 23.5820099,62.0304658 C23.6226986,62.1116243 23.5411105,62.1927828 23.4603657,62.1524149 C22.4507397,61.6472877 20.8172916,61.9131663 19.748003,62.1779883 C18.635285,62.453589 17.6330378,62.9329315 16.6875016,63.5809315 C14.9383123,64.7790763 13.5671267,66.6357886 13.230655,68.7659883 C12.9053568,70.8236947 13.7480119,72.9071859 15.1634701,74.3819883 C15.8920706,75.1415812 16.7629758,75.7982466 17.7380271,76.2074207 C18.9213703,76.7043053 20.0926968,76.6888767 21.1396383,77.5091272 C21.7868615,78.0161566 21.6304317,78.8837495 21.1915005,79.4467867 C23.4002815,81.8747789 25.3590277,84.5310294 27.5675978,86.9685323 C28.5913489,88.098364 29.6069379,89.2295316 30.5878606,90.3957307 L30.9540299,90.8347632 C31.9335084,92.0198043 33.4919039,93.2716321 33.9394787,94.7620744 C34.2179745,95.6892681 33.2275332,96.9019961 32.22634,96.4795068 C30.6905788,95.831228 29.5942525,94.1445712 28.5564905,92.8509346 L28.4888895,92.7671389 C27.4006269,91.426544 26.4344302,90.0113425 25.5510864,88.5282975 L25.2606364,88.0397304 C23.6633184,85.346632 22.0797353,82.5535515 21.0612126,79.5949432 C20.9939604,79.6642661 20.9227026,79.7274599 20.84765,79.7809315 C19.3803296,80.8269041 17.2472337,80.0227162 15.7818107,79.3434364 C14.3983974,78.702411 13.1300929,77.7377987 12.1415491,76.5751703 C9.9915874,74.046998 9.00051368,70.7727593 9.71857305,67.491546 C10.3267942,64.7120783 12.2484358,62.0084853 14.7677574,60.6025832 C13.6048638,59.2605088 13.1233466,57.4513503 12.8028974,55.6825597 C12.3939029,53.4247045 12.3123148,51.1108415 12.4234179,48.8212838 C12.6449918,44.2609785 13.8156857,39.7657691 15.6253809,35.58991 C18.8631835,28.1180431 24.5874195,21.8679922 31.803853,18.1010959 Z M16.4346629,67.960955 C17.967338,67.6730959 19.3956564,67.6035616 20.8739395,68.2536751 C22.4774508,68.9593738 23.6059804,70.1243366 24.6550301,71.4892368 C25.8486636,73.0417738 22.7895097,74.7378618 22.0181786,72.6768079 L21.9955119,72.6131977 C21.7889065,72.0030294 21.4189141,71.4131507 20.950257,70.8701918 C20.8096388,71.0861918 20.6215857,71.276407 20.4006443,71.3852524 C20.1331113,71.517135 19.7245385,71.4258317 19.6602378,71.0832329 C19.58898,70.7030137 19.6678274,70.2422701 19.8866605,69.9203836 L19.9165973,69.8764227 L19.9165973,69.8764227 C18.8532116,69.0185519 17.5741552,68.3918982 16.4346629,68.1902701 C16.320819,68.1699804 16.322084,67.98209 16.4346629,67.960955 Z"
                id="🖍-Ink"
                fill="${this.strokeColor || "#000000"}">
                </path>
            </g>
        `);
    }
}