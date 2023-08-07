
import logo from "../images/amazon.png";
import "../css/MainPage.css"

const Footer = () => <>
    <div style={{ width: "100%", height: "50px", background: "#e6e6d3f2",display:"flex" }}>
        <svg style={{marginLeft:"950px",marginTop:"20px"}} width="81" height="20" viewBox="0 0 81 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.832 9.144C7.57867 9.28267 8.18133 9.55467 8.64 9.96C9.10933 10.3547 9.344 10.9627 9.344 11.784C9.344 12.9467 8.928 13.7733 8.096 14.264C7.264 14.7547 6.10667 15 4.624 15H1.168V3.928H4.192C5.70667 3.928 6.864 4.152 7.664 4.6C8.464 5.048 8.864 5.768 8.864 6.76C8.864 7.41067 8.66667 7.93867 8.272 8.344C7.888 8.73867 7.408 9.00533 6.832 9.144ZM3.52 5.624V8.424H4.672C5.248 8.424 5.69067 8.30667 6 8.072C6.30933 7.82667 6.464 7.45867 6.464 6.968C6.464 6.47733 6.29867 6.13067 5.968 5.928C5.63733 5.72533 5.12 5.624 4.416 5.624H3.52ZM4.64 13.256C5.376 13.256 5.936 13.1493 6.32 12.936C6.704 12.712 6.896 12.296 6.896 11.688C6.896 10.5787 6.21333 10.024 4.848 10.024H3.52V13.256H4.64ZM17.9398 3.928L17.6838 5.816H13.3638V15H11.0118V3.928H17.9398ZM22.5673 3.672C23.5806 3.672 24.4553 3.90133 25.1913 4.36C25.9273 4.808 26.4926 5.464 26.8873 6.328C27.2819 7.192 27.4793 8.23733 27.4793 9.464C27.4793 10.6693 27.2819 11.7093 26.8873 12.584C26.4926 13.448 25.9273 14.1093 25.1913 14.568C24.4553 15.0267 23.5806 15.256 22.5673 15.256C21.5539 15.256 20.6739 15.032 19.9273 14.584C19.1913 14.1253 18.6259 13.464 18.2313 12.6C17.8366 11.7253 17.6393 10.68 17.6393 9.464C17.6393 8.26933 17.8366 7.24 18.2313 6.376C18.6366 5.50133 19.2073 4.83467 19.9433 4.376C20.6899 3.90667 21.5646 3.672 22.5673 3.672ZM22.5673 5.432C21.7566 5.432 21.1433 5.752 20.7273 6.392C20.3219 7.032 20.1193 8.056 20.1193 9.464C20.1193 10.872 20.3273 11.896 20.7433 12.536C21.1593 13.176 21.7673 13.496 22.5673 13.496C23.3779 13.496 23.9859 13.1813 24.3913 12.552C24.7966 11.912 24.9993 10.8827 24.9993 9.464C24.9993 8.04533 24.7966 7.02133 24.3913 6.392C23.9859 5.752 23.3779 5.432 22.5673 5.432ZM32.6858 3.928C34.1258 3.928 35.2404 4.22667 36.0298 4.824C36.8298 5.42133 37.2298 6.312 37.2298 7.496C37.2298 8.73333 36.8351 9.66667 36.0458 10.296C35.2564 10.9147 34.2004 11.224 32.8778 11.224H31.6138V15H29.2618V3.928H32.6858ZM32.6858 9.496C33.3684 9.496 33.8911 9.34133 34.2538 9.032C34.6164 8.72267 34.7978 8.21067 34.7978 7.496C34.7978 6.248 34.0831 5.624 32.6538 5.624H31.6138V9.496H32.6858ZM43.6009 11.768C43.2809 12.6 42.9235 13.256 42.5289 13.736C42.1449 14.2053 41.6809 14.5573 41.1369 14.792C40.6035 15.016 39.9262 15.1707 39.1049 15.256L38.7849 13.656C39.4995 13.5493 40.0435 13.384 40.4169 13.16C40.7902 12.9253 41.0995 12.552 41.3449 12.04H40.5769L37.1529 3.928H39.5689L42.0489 10.696L44.2249 3.928H46.6089L43.6009 11.768Z" fill="#FF9A02" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M71 3.33333C71.4603 3.33333 71.8334 3.70642 71.8334 4.16666V15.8333C71.8334 16.2936 71.4603 16.6667 71 16.6667C70.5398 16.6667 70.1667 16.2936 70.1667 15.8333V4.16666C70.1667 3.70642 70.5398 3.33333 71 3.33333Z" fill="#FF9A02" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M70.4107 3.57741C70.7362 3.25197 71.2638 3.25197 71.5892 3.57741L77.4226 9.41074C77.748 9.73618 77.748 10.2638 77.4226 10.5893C77.0971 10.9147 76.5695 10.9147 76.2441 10.5893L71 5.34517L65.7559 10.5893C65.4305 10.9147 64.9028 10.9147 64.5774 10.5893C64.252 10.2638 64.252 9.73618 64.5774 9.41074L70.4107 3.57741Z" fill="#FF9A02" />
        </svg>
    </div>



    <footer style={{ background: "white" }}>
        <div style={{ height: "330px", width: "100%", display: "flex" }} className="mx-auto w-full max-w-screen-xl">
            <div style={{ width: "400px" }}>
                <svg style={{ marginLeft: "0px", marginTop: "50px" }} width="257" height="69" viewBox="0 0 257 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.442 16.92H48.938L60.65 51H52.586L49.946 43.368H39.338L36.746 51H28.682L40.442 16.92ZM48.65 37.944L44.666 24.84L40.586 37.944H48.65ZM64.0062 51V16.92H71.8782V44.088H88.3902V51H64.0062ZM92.0844 51V16.92H99.9564V44.088H116.468V51H92.0844Z" fill="#FF9A02" />
                    <path d="M159.378 51H151.698V36.84C151.698 35.208 151.394 34.008 150.786 33.24C150.178 32.472 149.394 32.088 148.434 32.088C147.41 32.088 146.402 32.504 145.41 33.336C144.418 34.168 143.714 35.24 143.298 36.552V51H135.618V36.84C135.618 35.176 135.314 33.976 134.706 33.24C134.098 32.472 133.314 32.088 132.354 32.088C131.362 32.088 130.37 32.504 129.378 33.336C128.386 34.168 127.666 35.24 127.218 36.552V51H119.538V25.8H126.45V30.024C127.378 28.52 128.626 27.368 130.194 26.568C131.794 25.736 133.65 25.32 135.762 25.32C137.842 25.32 139.442 25.816 140.562 26.808C141.682 27.768 142.402 28.904 142.722 30.216C143.682 28.648 144.946 27.448 146.514 26.616C148.114 25.752 149.906 25.32 151.89 25.32C153.49 25.32 154.786 25.624 155.778 26.232C156.77 26.808 157.522 27.576 158.034 28.536C158.546 29.496 158.898 30.536 159.09 31.656C159.282 32.744 159.378 33.816 159.378 34.872V51ZM162.814 43.464C162.814 41.8 163.278 40.344 164.206 39.096C165.134 37.848 166.414 36.872 168.046 36.168C169.678 35.432 171.55 35.064 173.662 35.064C174.686 35.064 175.694 35.16 176.686 35.352C177.678 35.512 178.542 35.752 179.278 36.072V34.968C179.278 33.592 178.862 32.536 178.03 31.8C177.198 31.064 175.934 30.696 174.238 30.696C172.83 30.696 171.502 30.936 170.254 31.416C169.038 31.896 167.742 32.584 166.366 33.48L164.062 28.584C165.726 27.496 167.454 26.68 169.246 26.136C171.07 25.592 172.99 25.32 175.006 25.32C178.782 25.32 181.71 26.232 183.79 28.056C185.902 29.848 186.958 32.456 186.958 35.88V42.456C186.958 43.224 187.07 43.768 187.294 44.088C187.55 44.376 187.982 44.552 188.59 44.616V51C187.95 51.128 187.342 51.224 186.766 51.288C186.222 51.352 185.742 51.384 185.326 51.384C183.886 51.384 182.782 51.096 182.014 50.52C181.278 49.944 180.814 49.16 180.622 48.168L180.478 47.064C179.358 48.504 178.014 49.608 176.446 50.376C174.91 51.112 173.294 51.48 171.598 51.48C169.934 51.48 168.43 51.128 167.086 50.424C165.774 49.72 164.734 48.76 163.966 47.544C163.198 46.328 162.814 44.968 162.814 43.464ZM178.078 44.424C178.43 44.136 178.718 43.816 178.942 43.464C179.166 43.112 179.278 42.776 179.278 42.456V40.2C178.638 39.944 177.918 39.752 177.118 39.624C176.35 39.464 175.63 39.384 174.958 39.384C173.55 39.384 172.382 39.704 171.454 40.344C170.526 40.952 170.062 41.768 170.062 42.792C170.062 43.368 170.222 43.896 170.542 44.376C170.862 44.856 171.294 45.24 171.838 45.528C172.414 45.816 173.086 45.96 173.854 45.96C174.622 45.96 175.39 45.816 176.158 45.528C176.926 45.24 177.566 44.872 178.078 44.424ZM208.507 32.376C206.651 32.376 204.971 32.68 203.467 33.288C201.963 33.864 200.875 34.728 200.203 35.88V51H192.523V25.8H199.579V30.888C200.443 29.192 201.563 27.864 202.939 26.904C204.315 25.944 205.755 25.448 207.259 25.416C207.611 25.416 207.867 25.416 208.027 25.416C208.219 25.416 208.379 25.432 208.507 25.464V32.376ZM228.062 49.656C227.358 49.944 226.574 50.232 225.71 50.52C224.878 50.808 223.998 51.032 223.07 51.192C222.142 51.384 221.23 51.48 220.334 51.48C219.054 51.48 217.87 51.272 216.782 50.856C215.726 50.408 214.878 49.688 214.238 48.696C213.63 47.704 213.326 46.392 213.326 44.76V31.608H210.11V25.8H213.326V17.784H221.006V25.8H226.142V31.608H221.006V42.12C221.006 42.952 221.214 43.56 221.63 43.944C222.046 44.296 222.574 44.472 223.214 44.472C223.758 44.472 224.334 44.376 224.942 44.184C225.582 43.992 226.126 43.784 226.574 43.56L228.062 49.656Z" fill="#D9D9D9" />
                </svg>
                <a style={{ marginLeft: "20px" }}>Зручний та широкий вибір товарів,що </a><br />
                <a style={{ marginLeft: "20px" }}>доставляє радість прямо до вашого</a><br />
                <a style={{ marginLeft: "20px" }}>дому - наша мета!</a>
                <svg style={{ marginLeft: "20px", marginTop: "20px" }} width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8953 10.99L18.4834 10.9909C17.3762 10.9909 17.1616 11.5169 17.1616 12.2884V13.9909H19.8025L19.4584 16.6581H17.1616V23.5H14.4081V16.6581H12.1056V13.9909H14.4081V12.025C14.4081 9.74219 15.8022 8.5 17.8375 8.5C18.8125 8.5 19.6506 8.57219 19.8953 8.605V10.99ZM16 1C7.71625 1 1 7.71531 1 16C1 24.2837 7.71625 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z" fill="#BDC4CD" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9644 12.9409C63.97 13.0731 63.9738 13.2053 63.9738 13.3394C63.9738 17.4053 60.8781 22.0947 55.2175 22.0947C53.4794 22.0947 51.8622 21.5856 50.5 20.7128C50.7409 20.7409 50.9856 20.755 51.2341 20.755C52.6759 20.755 54.0025 20.2638 55.0562 19.4378C53.7091 19.4134 52.5728 18.5238 52.1809 17.3013C52.3694 17.3369 52.5616 17.3556 52.7603 17.3556C53.0406 17.3556 53.3125 17.3181 53.5712 17.2478C52.1631 16.9656 51.1028 15.7216 51.1028 14.2309C51.1028 14.2178 51.1028 14.2047 51.1028 14.1916C51.5172 14.4222 51.9925 14.5609 52.4969 14.5769C51.6709 14.0247 51.1272 13.0825 51.1272 12.0156C51.1272 11.4513 51.2791 10.9225 51.5444 10.4678C53.0622 12.3297 55.33 13.555 57.8875 13.6834C57.835 13.4584 57.8078 13.2231 57.8078 12.9822C57.8078 11.2825 59.1859 9.90438 60.8847 9.90438C61.7706 9.90438 62.5703 10.2784 63.1309 10.8766C63.8322 10.7388 64.4912 10.4828 65.0856 10.1303C64.8559 10.8484 64.3675 11.4513 63.7328 11.8328C64.3553 11.7578 64.9478 11.5928 65.5 11.3481C65.0875 11.965 64.5653 12.5069 63.9644 12.9409ZM58 1C49.7153 1 43 7.71531 43 16C43 24.2837 49.7153 31 58 31C66.2847 31 73 24.2837 73 16C73 7.71531 66.2847 1 58 1Z" fill="#BDC4CD" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M107.5 23.4859H104.392V18.6222C104.392 17.4625 104.372 15.9709 102.777 15.9709C101.16 15.9709 100.913 17.2347 100.913 18.5397V23.4859H97.8081V13.4847H100.787V14.8525H100.831C101.245 14.0659 102.259 13.2362 103.772 13.2362C106.919 13.2362 107.5 15.3072 107.5 18.0006V23.4859ZM94.3038 12.1187C93.3053 12.1187 92.5 11.3106 92.5 10.3159C92.5 9.32125 93.3053 8.51312 94.3038 8.51312C95.2975 8.51312 96.1047 9.32125 96.1047 10.3159C96.1047 11.3106 95.2975 12.1187 94.3038 12.1187ZM95.8581 23.4859H92.7466V13.4847H95.8581V23.4859ZM100 1C91.7153 1 85 7.71531 85 16C85 24.2837 91.7153 31 100 31C108.285 31 115 24.2837 115 16C115 7.71531 108.285 1 100 1Z" fill="#BDC4CD" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M142.018 18.8948C143.61 18.8948 144.902 17.6067 144.902 16.0167C144.902 14.4276 143.61 13.1395 142.018 13.1395C140.425 13.1395 139.133 14.4276 139.133 16.0167C139.133 17.6067 140.425 18.8948 142.018 18.8948ZM145.339 13.0694H147.367C147.599 13.0694 147.787 12.8819 147.787 12.6512V10.6272C147.787 10.3966 147.599 10.2091 147.367 10.2091H145.339C145.108 10.2091 144.919 10.3966 144.919 10.6272V12.6512C144.919 12.8819 145.108 13.0694 145.339 13.0694ZM149.5 21.7206C149.5 22.7031 148.702 23.5 147.717 23.5H136.283C135.299 23.5 134.5 22.7031 134.5 21.7206V10.2784C134.5 9.29594 135.299 8.5 136.283 8.5H147.717C148.702 8.5 149.5 9.29594 149.5 10.2784V21.7206ZM142 1C133.715 1 127 7.71531 127 16C127 24.2837 133.715 31 142 31C150.285 31 157 24.2837 157 16C157 7.71531 150.285 1 142 1ZM146.58 16.0171C146.58 18.5268 144.534 20.5696 142.018 20.5696C139.501 20.5696 137.455 18.5268 137.455 16.0171C137.455 15.6008 137.511 15.1967 137.617 14.8133H136.214V21.3364C136.214 21.568 136.401 21.7555 136.633 21.7555H147.402C147.634 21.7555 147.822 21.568 147.822 21.3364V14.8133H146.418C146.524 15.1967 146.58 15.6008 146.58 16.0171Z" fill="#BDC4CD" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M191.5 16.5662C191.5 17.7803 191.35 18.9944 191.35 18.9944C191.35 18.9944 191.204 20.0275 190.754 20.4831C190.184 21.0803 189.544 21.0831 189.251 21.1178C187.152 21.2697 184 21.2744 184 21.2744C184 21.2744 180.1 21.2388 178.9 21.1244C178.566 21.0616 177.816 21.0803 177.246 20.4831C176.796 20.0275 176.65 18.9944 176.65 18.9944C176.65 18.9944 176.5 17.7803 176.5 16.5662V15.4281C176.5 14.2141 176.65 13.0009 176.65 13.0009C176.65 13.0009 176.796 11.9669 177.246 11.5113C177.816 10.9141 178.456 10.9113 178.749 10.8766C180.848 10.7247 183.997 10.7247 183.997 10.7247H184.003C184.003 10.7247 187.152 10.7247 189.251 10.8766C189.544 10.9113 190.184 10.9141 190.754 11.5113C191.204 11.9669 191.35 13.0009 191.35 13.0009C191.35 13.0009 191.5 14.2141 191.5 15.4281V16.5662ZM184 1C175.715 1 169 7.71531 169 16C169 24.2837 175.715 31 184 31C192.285 31 199 24.2837 199 16C199 7.71531 192.285 1 184 1ZM182.451 17.9453L186.504 15.8453L182.45 13.7303L182.451 17.9453Z" fill="#BDC4CD" />
                </svg>


            </div>

            <div style={{ marginLeft: "90px", marginTop: "50px", display: "inline-flex" }} className="divove grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div style={{width:"700px",display:"inline-flex"}}>
                    <div>
                        <h2 style={{ color: "black", fontSize: "20px", fontWeight: "500" }}>Компанія</h2>
                        <ul className=" font-medium">
                            <li >
                                Про нас
                            </li>
                            <li >
                                Робота в ALLmart
                            </li>


                            <li >
                                Категорії
                            </li>
                            <li >
                                соціальні мережі
                            </li>
                        </ul>
                    </div>
                    <div style={{marginLeft:"30px"}}>
                        <h2 style={{ color: "black", fontSize: "20px", fontWeight: "500" }}>Партнерство</h2>
                        <ul className=" font-medium">

                            <li >
                                Реклама на сайті
                            </li>
                            <li >
                                Стати інвестором
                            </li>
                            <li >
                                Продаж товарів
                            </li>

                        </ul>
                    </div>
                    <div style={{marginLeft:"30px"}}>
                        <h2 style={{ color: "black", fontSize: "20px", fontWeight: "500" }}>Інформація</h2>
                        <ul className=" font-medium">

                            <li >
                                Допомога
                            </li>
                            <li >
                                Повернення
                            </li>
                            <li >
                                Доставка
                            </li>
                            <li >
                                Правила безпеки
                            </li>

                        </ul>
                    </div>
                    <div style={{marginLeft:"30px"}}>
                        <h2 style={{ color: "black", fontSize: "20px", fontWeight: "500" }}>Для користувачів</h2>
                        <ul className="t  font-medium">

                            <li >
                                Мій акаунт
                            </li>
                            <li >
                                Зареєструватися
                            </li>
                            <li>
                                Налаштування
                            </li>
                            <li>
                                Конфіденційність
                            </li>

                        </ul>
                    </div>
                </div>

                <div style={{ marginLeft: "90px",width:"190px" }}>
                    <h2 style={{ color: "black", fontSize: "20px", fontWeight: "500" }}>Отримати додаток</h2>
                    <svg style={{marginTop:"20px"}} width="124" height="42" viewBox="0 0 124 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="124" height="42" rx="6" fill="#1C1C1C" />
                        <path d="M24.9292 8.68967C25.0796 10.0467 24.5379 11.3839 23.7462 12.3669C22.9201 13.3345 21.5985 14.0746 20.3113 13.9793C20.1428 12.6735 20.795 11.285 21.5251 10.4379C22.3503 9.47655 23.7834 8.74003 24.9292 8.68967Z" fill="white" />
                        <path d="M29.1431 16.5179C28.9994 16.603 26.6188 18.0136 26.6449 20.8904C26.6757 24.3643 29.7066 25.5127 29.7429 25.5244C29.7248 25.6053 29.2682 27.1836 28.1314 28.7825C27.1821 30.1926 26.1875 31.5712 24.6077 31.5946C23.8564 31.6122 23.3491 31.3979 22.8205 31.1745C22.2694 30.9416 21.6951 30.6989 20.7968 30.6989C19.8445 30.6989 19.2447 30.9496 18.6663 31.1914C18.1659 31.4006 17.6814 31.6031 16.9986 31.6306C15.494 31.6854 14.3445 30.127 13.3607 28.7295C11.3942 25.8778 9.8633 20.6934 11.9159 17.1655C12.9105 15.4353 14.724 14.321 16.6625 14.2914C17.5162 14.274 18.3349 14.6006 19.0526 14.8869C19.6015 15.1059 20.0913 15.3013 20.4924 15.3013C20.8448 15.3013 21.3208 15.1137 21.8757 14.8951C22.7501 14.5505 23.8201 14.1289 24.9102 14.2428C25.6557 14.2644 27.7772 14.5351 29.1459 16.5162L29.1431 16.5179Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0404 9.46418H37.9139V15.7452H40.0404C41.9213 15.7452 43.0261 14.583 43.0261 12.6025C43.0261 10.6264 41.9169 9.46418 40.0404 9.46418ZM38.7031 10.1693V15.04H39.9877C41.4215 15.04 42.2194 14.1695 42.2194 12.6112C42.2194 11.0399 41.4258 10.1693 39.9877 10.1693H38.7031Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.0745 15.8235C44.8118 15.8235 43.9612 14.9225 43.9612 13.4817C43.9612 12.0366 44.8118 11.14 46.0745 11.14C47.3328 11.14 48.1834 12.0366 48.1834 13.4817C48.1834 14.9225 47.3328 15.8235 46.0745 15.8235ZM47.4074 13.4817C47.4074 14.5482 46.8812 15.1575 46.0745 15.1575C45.2678 15.1575 44.7372 14.5482 44.7372 13.4817C44.7372 12.4153 45.2678 11.8059 46.0745 11.8059C46.8812 11.8059 47.4074 12.4153 47.4074 13.4817Z" fill="white" />
                        <path d="M53.003 15.7452H53.7791L55.0506 11.2183H54.2964L53.3845 14.9007H53.367L52.3322 11.2183H51.5956L50.5653 14.9007H50.5478L49.6358 11.2183H48.8773L50.1532 15.7452H50.9292L51.9552 12.2412H51.9727L53.003 15.7452Z" fill="white" />
                        <path d="M56.6915 11.2183H55.9725V15.7452H56.7354V13.0813C56.7354 12.3152 57.2045 11.8103 57.9235 11.8103C58.625 11.8103 58.9714 12.2107 58.9714 12.942V15.7452H59.7343V12.8071C59.7343 11.7798 59.1556 11.14 58.1559 11.14C57.45 11.14 56.9633 11.4534 56.7091 11.9409H56.6915V11.2183Z" fill="white" />
                        <path d="M61.042 9.46418V15.7452H61.8049V9.46418H61.042Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.911 13.4817C62.911 14.9225 63.7615 15.8235 65.0243 15.8235C66.2826 15.8235 67.1332 14.9225 67.1332 13.4817C67.1332 12.0366 66.2826 11.14 65.0243 11.14C63.7615 11.14 62.911 12.0366 62.911 13.4817ZM65.0242 15.1575C65.831 15.1575 66.3571 14.5482 66.3571 13.4817C66.3571 12.4153 65.831 11.8059 65.0242 11.8059C64.2175 11.8059 63.687 12.4153 63.687 13.4817C63.687 14.5482 64.2175 15.1575 65.0242 15.1575Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M69.5326 15.8235C68.625 15.8235 68.0156 15.2794 68.0156 14.4655C68.0156 13.6907 68.6163 13.2032 69.6685 13.1422L70.9751 13.0682V12.6895C70.9751 12.1368 70.6068 11.8059 69.9754 11.8059C69.3879 11.8059 69.0196 12.0802 68.9232 12.5241H68.1866C68.2392 11.7407 68.9144 11.14 69.993 11.14C71.0628 11.14 71.738 11.7145 71.738 12.6155V15.7452H71.0145V14.966H70.997C70.7252 15.484 70.1464 15.8235 69.5326 15.8235ZM70.9751 14.0258C70.9751 14.6787 70.4226 15.1793 69.7036 15.1793C69.1555 15.1793 68.7916 14.8964 68.7916 14.4655C68.7916 14.0389 69.1424 13.769 69.7562 13.7298L70.9751 13.6558V14.0258Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.7826 13.4817C72.7826 14.9007 73.5718 15.8235 74.7337 15.8235C75.3914 15.8235 75.9131 15.5014 76.2069 14.9791H76.22V15.7452H76.9478V9.46418H76.1849V11.9539H76.1674C75.8956 11.4577 75.3694 11.14 74.7162 11.14C73.5674 11.14 72.7826 12.0628 72.7826 13.4817ZM74.8784 11.8059C74.0717 11.8059 73.5631 12.4589 73.5631 13.4817C73.5631 14.509 74.0717 15.1575 74.8784 15.1575C75.6632 15.1575 76.1893 14.4959 76.1893 13.4817C76.1893 12.4719 75.6632 11.8059 74.8784 11.8059Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M82.3079 15.8235C81.0452 15.8235 80.1946 14.9225 80.1946 13.4817C80.1946 12.0366 81.0452 11.14 82.3079 11.14C83.5663 11.14 84.4168 12.0366 84.4168 13.4817C84.4168 14.9225 83.5663 15.8235 82.3079 15.8235ZM83.6408 13.4817C83.6408 14.5482 83.1147 15.1575 82.3079 15.1575C81.5012 15.1575 80.9707 14.5482 80.9707 13.4817C80.9707 12.4153 81.5012 11.8059 82.3079 11.8059C83.1147 11.8059 83.6408 12.4153 83.6408 13.4817Z" fill="white" />
                        <path d="M86.2025 11.2183H85.4834V15.7452H86.2463V13.0813C86.2463 12.3152 86.7154 11.8103 87.4345 11.8103C88.136 11.8103 88.4824 12.2107 88.4824 12.942V15.7452H89.2453V12.8071C89.2453 11.7798 88.6665 11.14 87.6669 11.14C86.961 11.14 86.4743 11.4534 86.22 11.9409H86.2025V11.2183Z" fill="white" />
                        <path d="M93.6627 10.1258H92.8998V11.2183H92.2202V11.8408H92.8998V14.5699C92.8998 15.4405 93.2243 15.78 94.0617 15.78C94.2414 15.78 94.4519 15.7669 94.544 15.7452V15.1097C94.4914 15.1184 94.316 15.1314 94.2283 15.1314C93.8381 15.1314 93.6627 14.9443 93.6627 14.5307V11.8408H94.5484V11.2183H93.6627V10.1258Z" fill="white" />
                        <path d="M95.6982 9.46418V15.7452H96.4611V13.1074C96.4611 12.3239 96.9303 11.8103 97.6888 11.8103C98.4034 11.8103 98.7673 12.2412 98.7673 12.9594V15.7452H99.5302V12.8201C99.5302 11.8103 98.9252 11.14 97.9255 11.14C97.2328 11.14 96.733 11.436 96.4787 11.9409H96.4611V9.46418H95.6982Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M104.573 14.448H103.824C103.697 14.8746 103.271 15.1662 102.693 15.1662C101.873 15.1662 101.36 14.596 101.36 13.7298V13.6863H104.63V13.399C104.63 12.0279 103.872 11.14 102.64 11.14C101.382 11.14 100.575 12.0932 100.575 13.4992C100.575 14.9225 101.368 15.8235 102.675 15.8235C103.67 15.8235 104.442 15.2402 104.573 14.448ZM102.627 11.7972C101.912 11.7972 101.412 12.3413 101.364 13.0943H103.841C103.824 12.337 103.346 11.7972 102.627 11.7972Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.3018 31.1427L44.197 27.9019H39.5933L38.4884 31.1427H36.5382L40.8991 19.1518H42.9247L47.2856 31.1427H45.3018ZM40.0704 26.4062L41.87 21.1461H41.9202L43.7198 26.4062H40.0704Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.1019 26.7718C57.1019 24.0046 55.6287 22.2596 53.3939 22.2596C52.1216 22.2596 51.1088 22.8994 50.5898 23.9049H50.5564V22.4009H48.807V34.0345H50.6149V29.7051H50.6568C51.159 30.6774 52.1634 31.2923 53.4274 31.2923C55.6371 31.2923 57.1019 29.5389 57.1019 26.7718ZM52.9168 29.7716C54.3481 29.7716 55.2437 28.6082 55.2437 26.7718C55.2437 24.9436 54.3481 23.772 52.9168 23.772C51.5357 23.772 50.6066 24.9686 50.6066 26.7718C50.6066 28.5916 51.5273 29.7716 52.9168 29.7716Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4864 22.2596C65.7213 22.2596 67.1944 24.0046 67.1944 26.7718C67.1944 29.5389 65.7296 31.2923 63.5199 31.2923C62.256 31.2923 61.2515 30.6774 60.7493 29.7051H60.7075V34.0345H58.8995V22.4009H60.6489V23.9049H60.6824C61.2013 22.8994 62.2141 22.2596 63.4864 22.2596ZM65.3362 26.7718C65.3362 28.6082 64.4406 29.7716 63.0093 29.7716C61.6198 29.7716 60.6991 28.5916 60.6991 26.7718C60.6991 24.9686 61.6282 23.772 63.0093 23.772C64.4406 23.772 65.3362 24.9436 65.3362 26.7718Z" fill="white" />
                        <path d="M74.4056 27.8022H72.5558C72.673 29.971 74.4809 31.3421 77.1594 31.3421C80.0221 31.3421 81.8217 29.9378 81.8217 27.6942C81.8217 25.9408 80.7921 24.952 78.3145 24.3703L76.9837 24.0462C75.4268 23.6639 74.7906 23.1654 74.7906 22.3178C74.7906 21.2541 75.7867 20.5229 77.2431 20.5229C78.6996 20.5229 79.6956 21.2458 79.8044 22.4424H81.6291C81.5705 20.3733 79.8212 18.9523 77.2682 18.9523C74.6902 18.9523 72.8739 20.3733 72.8739 22.4424C72.8739 24.1127 73.9034 25.1431 76.1215 25.6749L77.6868 26.0488C79.252 26.4311 79.9132 26.9878 79.9132 27.9185C79.9132 28.9905 78.8167 29.7716 77.2934 29.7716C75.703 29.7716 74.5395 28.9905 74.4056 27.8022Z" fill="white" />
                        <path d="M86.0383 20.3317H84.2219V22.4009H82.9413V23.8218H84.2219V28.8409C84.2219 30.5278 84.9167 31.2009 86.6995 31.2009C87.1013 31.2009 87.5031 31.1676 87.704 31.1178V29.6968C87.5868 29.7217 87.2938 29.7384 87.1097 29.7384C86.3731 29.7384 86.0383 29.3977 86.0383 28.6415V23.8218H87.7123V22.4009H86.0383V20.3317Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M88.9994 26.7718C88.9994 29.5888 90.6567 31.3089 93.1761 31.3089C95.6956 31.3089 97.3529 29.5888 97.3529 26.7718C97.3529 23.9631 95.6872 22.243 93.1761 22.243C90.665 22.243 88.9994 23.9631 88.9994 26.7718ZM93.1761 29.8298C94.5991 29.8298 95.5114 28.7163 95.5114 26.7718C95.5114 24.8356 94.5907 23.7221 93.1761 23.7221C91.7615 23.7221 90.8408 24.8356 90.8408 26.7718C90.8408 28.7163 91.7615 29.8298 93.1761 29.8298Z" fill="white" />
                        <path d="M99.1589 22.4009H100.883V23.8883H100.925C101.218 22.8662 102.005 22.2596 103.043 22.2596C103.302 22.2596 103.528 22.3011 103.662 22.3261V23.9963C103.52 23.9382 103.202 23.8966 102.85 23.8966C101.687 23.8966 100.967 24.6694 100.967 25.9076V31.1427H99.1589V22.4009Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M111.026 28.5812H112.742C112.491 30.1767 110.967 31.3151 108.95 31.3151C106.364 31.3151 104.798 29.5784 104.798 26.8195C104.798 24.0773 106.389 22.2492 108.875 22.2492C111.319 22.2492 112.842 23.961 112.842 26.6118V27.2267H106.623V27.3347C106.623 28.8554 107.544 29.8609 108.992 29.8609C110.021 29.8609 110.783 29.3457 111.026 28.5812ZM106.623 26.0752L111.026 26.0338C111.026 25.6656 110.871 24.9828 110.506 24.6207C110.141 24.2586 109.604 23.9837 108.875 23.9837C107.406 23.9837 106.623 24.9579 106.623 26.0752Z" fill="white" />
                    </svg>

                    <svg style={{marginTop:"10px"}} width="124" height="42" viewBox="0 0 124 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="124" height="42" rx="6" fill="#1C1C1C" />
                        <path d="M38.1173 11.1907H35.5787V11.9386H37.3793C37.2902 12.9874 36.4113 13.4347 35.5818 13.4347C34.5204 13.4347 33.5941 12.6056 33.5941 11.4435C33.5941 10.3115 34.477 9.43974 35.584 9.43974C36.4382 9.43974 36.9415 9.98018 36.9415 9.98018L37.4689 9.43791C37.4689 9.43791 36.7919 8.68967 35.5571 8.68967C33.9847 8.68967 32.7684 10.0071 32.7684 11.4301C32.7684 12.8246 33.9126 14.1842 35.5971 14.1842C37.0788 14.1842 38.1634 13.1767 38.1634 11.6866C38.1634 11.3723 38.1173 11.1907 38.1173 11.1907Z" fill="white" />
                        <path d="M38.5956 23.2445H44.1741C44.178 23.2602 44.275 23.6573 44.275 24.334C44.275 27.6082 41.8918 29.8224 38.6362 29.8224C34.9344 29.8224 32.4202 26.8347 32.4202 23.7707C32.4202 20.6437 35.0931 17.7487 38.5481 17.7488C41.2614 17.7488 42.7492 19.3929 42.7492 19.3929L41.59 20.5846C41.59 20.5846 40.4842 19.3967 38.6073 19.3967C36.1749 19.3967 34.2348 21.3124 34.2348 23.7999C34.2348 26.3533 36.27 28.1752 38.6023 28.1752C40.4252 28.1752 42.3565 27.1924 42.552 24.8879H38.5956V23.2445Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.9867 25.9031C44.9867 23.8309 46.6271 22.0543 48.9162 22.0543C50.7978 22.0543 52.8382 23.378 52.8382 25.9482C52.8382 28.1906 51.0841 29.8154 48.9429 29.8154C46.5777 29.8154 44.9867 28.0057 44.9867 25.9031ZM51.1313 25.938C51.1313 24.4821 50.0646 23.5785 48.9389 23.5785C47.6741 23.5785 46.702 24.5824 46.702 25.9266C46.702 27.3003 47.6862 28.2922 48.9337 28.2922C50.069 28.2922 51.1313 27.3629 51.1313 25.938Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.555 22.0543C55.266 22.0543 53.6255 23.8309 53.6255 25.9031C53.6255 28.0057 55.2166 29.8154 57.582 29.8154C59.723 29.8154 61.4772 28.1906 61.4772 25.9482C61.4772 23.378 59.4368 22.0543 57.555 22.0543ZM57.5778 23.5785C58.7034 23.5785 59.7702 24.4821 59.7702 25.938C59.7702 27.3629 58.7079 28.2922 57.5725 28.2922C56.3251 28.2922 55.341 27.3003 55.341 25.9266C55.341 24.5824 56.3129 23.5785 57.5778 23.5785Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.2641 25.9358C62.2641 23.8853 63.9158 22.0585 66.0167 22.0585C66.9315 22.0585 67.6205 22.4099 68.1244 22.949V22.2917H69.7632V29.2647C69.7632 32.0044 68.1711 33.3104 66.082 33.3104C64.1722 33.3104 63.0994 32.1446 62.5663 31.0253L64.0686 30.4018C64.2767 30.9019 64.8756 31.7836 66.0695 31.7836C67.3055 31.7836 68.1243 30.9815 68.1243 29.6427V28.8775C67.687 29.3814 67.0947 29.8205 65.9805 29.8205C64.1788 29.8205 62.2641 28.2716 62.2641 25.9358ZM66.1688 23.5796C67.199 23.5796 68.2568 24.4528 68.2568 25.944C68.2568 27.4598 67.2012 28.2951 66.1461 28.2951C65.0261 28.2951 63.9838 27.3922 63.9838 25.9584C63.9838 24.4687 65.0663 23.5796 66.1688 23.5796Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7486 25.9245C73.7486 23.6146 75.4125 22.0491 77.3944 22.0491C78.9576 22.0491 80.1387 23.0841 80.645 24.3232L80.9172 24.9559L75.6759 27.1149C75.989 27.6936 76.4943 28.291 77.593 28.2911C78.5713 28.2911 79.1575 27.7631 79.5082 27.2227L80.8593 28.1154C80.2535 28.9202 79.2386 29.8183 77.5848 29.8183C75.6033 29.8183 73.7486 28.3688 73.7486 25.9245ZM77.4628 23.5417C78.177 23.5417 78.6909 23.9185 78.9092 24.3705L75.409 25.8228C75.2581 24.6984 76.3313 23.5417 77.4628 23.5417Z" fill="white" />
                        <path d="M72.7991 29.5879H71.0775V18.1501H72.7991V29.5879Z" fill="white" />
                        <path d="M94.1596 29.5879H95.8812V18.1501H94.1596V29.5879Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M86.7517 29.5879H85.0301V18.1501L89.1945 18.15C91.2132 18.15 92.8648 19.7896 92.8648 21.7937C92.8648 23.7977 91.2132 25.4374 89.1945 25.4374H86.7517V29.5879ZM86.7516 23.7282V19.8591H89.1945C90.263 19.8591 91.1433 20.733 91.1433 21.7937C91.1433 22.8544 90.263 23.7282 89.1945 23.7282H86.7516Z" fill="white" />
                        <path d="M108.592 33.3104L113.577 22.0493H111.696L109.441 27.1452L107.185 22.0493H105.305L108.5 29.2692L106.712 33.3104H108.592Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M102.927 29.5879H104.649V25.4742C104.918 21.2315 99.4999 20.2336 97.4497 23.2922L98.8351 24.215C99.8375 22.4751 102.698 22.8755 102.886 24.7401C102.026 24.514 101.098 24.3501 100.249 24.4354C98.9247 24.5684 97.7907 25.4035 97.6105 26.7712C97.5131 27.5103 97.6793 28.4213 98.199 28.9765C99.0089 29.8416 100.339 29.9582 101.431 29.6626C102.046 29.4961 102.53 29.1333 102.927 28.6647V29.5879ZM101.022 28.1717C101.964 27.917 102.707 27.2327 102.927 26.2816C102.445 26.1267 102.002 26.0017 101.494 25.9409C98.5359 25.4993 99.0312 28.7104 101.022 28.1717Z" fill="white" />
                        <path d="M49.2771 14.0776H48.4937V8.87234H49.2771V14.0776Z" fill="white" />
                        <path d="M44.1061 14.0776H44.8896V9.65009H46.1757V8.87234H42.82V9.65009H44.1061V14.0776Z" fill="white" />
                        <path d="M41.994 14.0776H38.9893V8.87234H41.994V9.65009H39.7729V11.0861H41.7266V11.8638H39.7729V13.2997H41.994V14.0776Z" fill="white" />
                        <path d="M51.9844 14.0776V9.65009H53.2705V8.87234H49.915V9.65009H51.201V14.0776H51.9844Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.2864 11.4301C55.2864 10.007 56.5028 8.68967 58.0751 8.68967C59.6475 8.68967 60.8639 10.007 60.8639 11.4301C60.8639 12.8134 59.7378 14.1623 58.0751 14.1837C56.4125 14.1623 55.2864 12.8134 55.2864 11.4301ZM58.0751 13.4343C57.0241 13.4215 56.1122 12.5966 56.1122 11.4435C56.1122 10.3208 56.9808 9.454 58.0751 9.43998C59.1695 9.454 60.0381 10.3208 60.0381 11.4435C60.0381 12.5966 59.1262 13.4215 58.0751 13.4343Z" fill="white" />
                        <path d="M62.43 14.0776H61.6464V8.87234H62.43L64.9449 12.6619V8.87234H65.7285V14.0776H64.9463L62.43 10.286V14.0776Z" fill="white" />
                        <path d="M11.3758 15.1823L20.2279 23.9572L11.4183 32.8092C11.1612 32.647 11.0234 32.2958 11.021 31.8422L10.9412 16.1313C10.9387 15.6345 11.1208 15.3315 11.3758 15.1823Z" fill="white" />
                        <path d="M12.3827 15.1941L23.147 21.0243L20.5941 23.5892L12.0071 15.0769C12.1372 15.0938 12.2678 15.1318 12.3827 15.1941Z" fill="white" />
                        <path d="M23.6257 26.5944L20.9628 23.9547L23.623 21.2821L27.2863 23.2659C28.1887 23.7544 27.7271 24.3656 27.2863 24.6051L23.6257 26.5944Z" fill="white" />
                        <path d="M12.3827 32.7031C12.3014 32.7482 12.223 32.7836 12.148 32.8116L20.5967 24.3227L23.1492 26.853L12.3827 32.7031Z" fill="white" />
                    </svg>

                </div>

            </div>

        </div>





        <div style={{ height: "50px", width: "100%", background: "#e6e6d3f2" ,display:"flex" }}>

            <div style={{marginLeft:"100px",marginTop:"10px"}}>
                <ul>
                    <span>© 2023 Ecommerce</span>
                </ul>
            </div>

        </div>
    </footer>


</>

export default Footer;
