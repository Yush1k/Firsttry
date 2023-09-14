import frameImg from './../img/Frame.png'

function Write() {
    return (
        <section class="write">
            <div class="container">


                <div class="write_body">
                    <div class="write_img">
                        <img src={frameImg} alt="" />
                    </div>
                    <div class="write_text">
                        <div class="write_text-title">
                            <h1>Дизайн и верстка</h1>
                        </div>
                        <div class="write_text-info">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dicta fugit tempore, molestias eveniet laborum magnam, labore hic nulla temporibus accusamus iusto culpa voluptates odit? Praesentium maiores voluptatibus sit aliquid.
                        </div>
                        <button class="write_text-button">
                            Написать мне3
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Write;