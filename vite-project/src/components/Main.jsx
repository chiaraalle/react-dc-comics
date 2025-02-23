import Comics from "./Comics";


function Main(){
    return (
        <main>
            <section className="comics">
            <Comics />
            </section>
            <section className="action-icons">
                <div>
                    <figure>
                        <img src="./src/assets/img/buy-comics-digital-comics.png" alt="" />
                    </figure>
                    <span>DIGITAL COMICS</span>
                </div>
                <div>
                    <figure>
                        <img src="./src/assets/img/buy-comics-merchandise.png" alt="" />
                    </figure>
                    <span>DC MERCHANDISE</span>
                </div>
                <div>
                    <figure>
                        <img src="./src/assets/img/buy-comics-subscriptions.png" alt="" />
                    </figure>
                    <span>SUBSCRIPTION</span>
                </div>
                <div>
                    <figure>
                        <img src="./src/assets/img/buy-comics-shop-locator.png" alt="" />
                    </figure>
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div>
                    <figure>
                        <img src="./src/assets/img/buy-dc-power-visa.svg" alt="" />
                    </figure>
                    <span>DC POWER VISA</span>
                </div>
              
            </section>
        </main>
    )
}

export default Main