import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Content from './components/Content'
import Write from './components/Write';
import './style/css.css';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Write/>
    <section class="info"> 
        <div class="container">
            <div class="info_text">
                <div class="information">
                    <h1>Обо мне</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus esse delectus ipsa sit unde aut doloremque quaerat fugiat! Doloribus eveniet amet expedita nisi unde tenetur voluptas quisquam, animi assumenda.</p>
                </div>    
            </div>
        </div>
    </section>
    <section class="img">
        <div class="container">
            <div class="img_info">
                <div class="group_img">
                    <img src="img/project.jpg" alt="" />
                    <img src="img/Group.png" alt=""/>
                </div>
                <div class="group_img">
                    <img src="img/project1.jpg" alt=""/>
                    <img src="img/Group.png" alt=""/>
                </div>
                <div class="group_img">
                    <img src="img/project3.jpg" alt=""/>
                    <img src="img/Group.png" alt=""/>
                </div>
                <div class="group_img">
                    <img src="img/project4.jpg" alt=""/>
                    <img src="img/Group.png" alt=""/>
                </div>
                <div class="group_img">
                    <img src="img/project5.jpg" alt=""/>
                    <img src="img/Group.png" alt=""/>
                </div>
                <div class="group_img">
                    <img src="img/project6.jpg" alt=""/>
                    <img src="img/Group.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    <section class="profile">
        <div class="container">
            <div class="profile_body">
                <div class="info_profile">
                    <h1>Верстальщик</h1>
                    <h2>Тиль Швайгер</h2>
                    <p>Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и вёрстку небольшого сайта или интернет магазина.</p>
                    <button class="write_text-button">
                        Написать мне
                    </button> 
                </div>
                <div class="img_profile">
                    <img src="img/hero-avatar.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    <section class="work">
        <div class="container">
            <div class="body_work">
                <h2>Как я работаю</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dicta laborum quam repellendus aperiam corrupti nesciunt error recusandae vero ab possimus explicabo, est voluptates! Nesciunt optio eius consectetur dicta repellat?</p>
                <iframe width="100%" height="700px" src="https://www.youtube.com/embed/5g-MHZ0MzZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
    <section class="request">
        <div class="container">
            <div class="request_body">
                <h1>Хотите Веб-сайт?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos minus rerum, quas nostrum nobis doloremque sint dignissimos ratione vero, saepe deserunt iste dolorum ex aliquam. Quis et nulla repellat!</p>
                <div class="request_info">
                    <form action="">
                        <div class="request_info_inputs">
                            <input type="text" placeholder="Ваше имя" class="request_info_name request_info_input"/>
                            <input type="text" placeholder="Ваш e-mail" class="request_info_email request_info_input"/>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Сообщение" class="textarea"></textarea>
                        <button class="request_text-button">
                            Отправить
                        </button> 
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
