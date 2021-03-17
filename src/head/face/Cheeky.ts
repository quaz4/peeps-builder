import { Face } from "./Face";

export class Cheeky extends Face {
    public build(): string {
        return (`
            <g>
                <path
                    d='M41.4494 4.01602L43.4942 3.23283C50.5004 0.586187 60.1193 -2.47302 65.8154 3.22402C69.3294 6.73702 69.9984 11.912 67.4904 16.199C64.4514 21.392 59.0004 21.52 53.7364 22.285C47.7494 23.155 41.6604 24.809 36.0864 27.167C29.8074 29.824 23.9804 33.136 18.2714 36.835C12.8454 40.35 7.43842 46.095 0.943418 47.178C0.678418 47.222 0.377418 47.108 0.308418 46.817C-1.16658 40.467 2.93242 34.218 6.59042 29.264C11.0164 23.266 16.3794 18.343 22.3734 13.929C28.1584 9.66802 34.7684 6.58902 41.4494 4.01602ZM169.341 26.4832L168.717 26.5926C162.076 27.8106 155.56 29.3316 148.826 30.0316C141.935 30.7466 135 31.2656 128.076 31.4636C126.406 31.5116 124.603 31.4546 122.749 31.396C117.994 31.2457 112.907 31.0848 108.891 32.6576C107.515 33.1966 106.852 34.8626 108.002 36.0266C111.201 39.2657 116.243 40.58 120.647 41.838L123.074 42.5416C128.35 44.0237 133.815 44.9635 139.231 45.7316C151.069 47.4096 164.116 47.7756 175.895 45.5596C179.384 44.9036 181.788 41.7226 182.863 38.5916C184.028 35.1976 183.086 31.8706 180.642 29.3036C177.44 25.9388 173.59 25.7759 169.341 26.4832ZM38.072 56.8927C42.707 49.9387 53.287 50.9627 55.84 59.2147C56.6948 61.9774 56.2916 64.5675 55.8824 67.197C55.6295 68.8218 55.3742 70.4617 55.412 72.1667C55.495 75.9377 55.248 80.1397 54.092 83.7917C51.456 92.1197 43.966 98.0017 35.105 97.7577C26.273 97.5147 18.494 91.9247 14.795 84.0517C11.083 76.1487 11.869 67.9697 14.579 59.9337C14.709 59.5477 15.215 59.3607 15.52 59.6857C18.7234 63.0899 21.0684 66.6836 23.4948 70.4959L25.9814 74.4029C27.8818 77.3449 30.6436 81.1033 34.192 80.8672L34.7244 80.8147C35.1533 80.7778 35.3671 80.7941 35.5343 80.7136C35.7515 80.609 35.8902 80.3412 36.32 79.5817C36.672 78.9597 36.608 77.8037 36.778 77.0697L36.837 76.8217L36.8049 76.6881C36.7298 76.3326 36.6553 75.6628 36.5948 74.5004L36.582 74.2437C36.5312 73.1692 36.4304 72.0342 36.3268 70.8665C35.9058 66.1255 35.437 60.846 38.072 56.8927ZM171.394 57.2342C167.237 50.6532 154.733 52.6282 155.564 61.5222C156.092 67.1692 159.584 70.7392 160.987 75.9872C162.075 80.0522 160.446 82.3812 156.182 81.8332C151.725 81.2602 148.784 77.5842 146.845 73.8122C144.965 70.1552 144.45 65.0352 141.288 62.2282C141.011 61.9822 140.607 62.0232 140.405 62.3422C137.059 67.6052 139.798 77.4572 142.553 82.5032C145.643 88.1582 151.505 91.8832 157.93 92.3772C164.658 92.8932 170.895 89.6352 173.763 83.4722C175.584 79.5592 175.389 75.1952 174.897 71.0002L174.673 69.0616C174.193 64.9772 173.562 60.6661 171.394 57.2342ZM128.749 115.04C136.872 103.66 125.366 92.9573 117.815 88.3673C115.836 86.9473 117.407 82.2435 121.634 82.9705C160.031 89.5675 140.136 155.708 91.1125 119.413C85.276 114.705 92.344 104.334 98.6347 108.366C98.9537 108.611 99.2882 108.869 99.6369 109.139C106.705 114.603 119.636 124.601 128.749 115.04ZM113.944 165.352C115.478 162.685 119.01 160.214 122.242 160.593C136.721 162.291 136.696 179.845 131.105 190.093C126.148 199.18 115.889 204.514 105.621 203.735C94.8343 202.916 85.6433 196.574 81.5983 186.483C78.9233 179.808 77.6873 167.485 84.8033 163C84.9353 162.916 85.1533 162.937 85.2583 163.058C88.6703 167.027 88.8043 172.986 91.7913 177.405C94.5693 181.515 98.8853 184.909 103.941 185.433C107.717 185.825 111.537 184.463 113.014 181.073C113.813 179.239 113.722 178.244 113.422 176.982L113.149 175.885C112.203 172.044 111.779 169.119 113.944 165.352Z'
                    transform='translate(52.99948 55.99989)'
                    fill="${this.strokeColor || "#000000"}"
                    fillRule='evenodd'
                    stroke='none'
                />
            </g>
        `);
    }
}