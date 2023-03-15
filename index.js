// theme_chang_eof_website

        var home=document.getElementById("home_id");
        home.addEventListener("click" ,()=>{
             document.body.classList.toggle("root2");
            });

//rate button addeventlistner

        var rate_button=document.querySelectorAll(".rate_button");    
        rate_button.forEach((e)=>{
            e.addEventListener("click", ()=>{
              if(e.style.color !="red")
                e.style.color="red";
              else
                e.style.color="black";
            })
        })   

        var overlay_button=document.querySelectorAll(".overlay_button");    
        overlay_button.forEach((e)=>{
            e.addEventListener("click", ()=>{
              if(e.style.color !="red")
                e.style.color="red";
              else
                e.style.color="#5cdbcd";
            })
        })          

// onclick_functions

        function  onClickMenu(){
            document.getElementById("menu_logo1").classList.toggle("menu_logo1");
            document.getElementById("nav1").classList.toggle("nav_change");
            document.getElementById("menu_logo1").classList.toggle("menu_logo4");
            for (let i = 1; i <=3 ; i++) {
                var element = document.getElementById("box"+i);
                element.classList.toggle("box_change");  
            }
        }
        
        function onClickMenu1(){
            document.getElementById("menu_logo1").classList.toggle("menu_logo4");
            document.getElementById("nav1").classList.toggle("nav_change");
            document.getElementById("menu_logo1").classList.remove("menu_logo1");
            for (let i = 1; i <=3 ; i++) {
                var element = document.getElementById("box"+i);
                element.classList.toggle("box_change"); 
            }
        } 

// add_eventlisner_on_button and 3d effect 

        var search_button=document.getElementById("search_button")
        var search_1_id1=document.getElementById("search_1_id");
        var upper_1=document.getElementById("upper_1_id");
        var lower_1=document.getElementById("lower1_id");

        search_button.addEventListener("click" , ()=>{
                var search_1_id=document.getElementById("search_1_id");
                var body_main2_id=document.getElementById("body_main2_id");
                var audio1=new Audio ("buttons/mixkit-fast-double-click-on-mouse-275.wav");
                var audio2=new Audio ("buttons/mixkit-fast-double-click-on-mouse-275.wav");
                  if(search_1_id.style.transform != "scale(1)" && body_main2_id.style.opacity != "0.3"){
                    search_1_id.style.transform="scale(1)";
                    body_main2_id.style.opacity = "0.3";
                    audio1.play();
                }
                else{
                    search_1_id.style.transform="scale(0)";
                    body_main2_id.style.opacity = "1";
                    audio2.play();
                }
        })

        search_1_id1.addEventListener("mousemove",(e)=>{
               var xAxis=(window.innerWidth / 2 - e.pageX) /100; 
               var yAxis=(window.innerHeight / 2 - e.pageY) /100;
               search_1_id1.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
   
        search_1_id1.addEventListener("mouseenter",(e)=>{
               search_1_id1.style.transition="none";
               upper_1.style.transform="translateZ(180px)";
               lower_1.style.transform="translateZ(180px)";
               
        });

        search_1_id1.addEventListener("mouseleave",(e)=>{
                search_1_id1.style.transition="all 1s ease";
                upper_1.style.transform="translateZ(0px)";
                lower_1.style.transform="translateZ(0px)";
                search_1_id1.style.transform=`rotateY(0deg) rotateX(0deg)`;
        });
           
// load_by_javascript

        window.addEventListener("load",praveen3)
        function praveen3(){
            var container2=document.getElementById("container2_id");
            var section2=document.getElementById("section2_id");
            container2.classList.add("container2_change");
        }

// scroll_by_javascript

        window.addEventListener(`scroll`,praveen2)
        function praveen2(){
            var nav=document.getElementById("nav1");
            var section=document.getElementById("section_id");
            if (window.scrollY>5){
                nav.classList.add("nav_anim");
                section.classList.add("section_anim");
            }
            else{
                nav.classList.remove("nav_anim");
                section.classList.remove("section_anim");
            }
        }

        window.addEventListener(`scroll`,praveen4)
        function praveen4(){
            var poster=document.querySelectorAll(".poster")
            poster.forEach((e)=>{
                if(window.scrollY>1){
                    e.classList.add("poster_change");
                }
                else{
                    e.classList.remove("poster_change");
                }
            })
        }

        window.addEventListener(`scroll`,praveen5)
        function praveen5(){
            var movie=document.querySelectorAll(".movie")
            movie.forEach((e)=>{
                if(window.scrollY>5){
                    e.classList.add("movie_change");
                }
                else{
                    e.classList.remove("movie_change");
                }
            })
        }

        window.addEventListener(`scroll`,praveen6)
        function praveen6(){
            var number=document.querySelectorAll(".number");
            number.forEach((e)=>{
                if(window.scrollY>20){
                    e.classList.add("number_change");
                }
                else{
                    e.classList.remove("number_change");
                }
            })
        }

// exit-button

function exit_bt(){
    const movies_trailer=document.querySelectorAll(".movies_trailer")
    movies_trailer.forEach((r)=>{
       const child=document.querySelector(".trailer_frame")
       child.remove(r);
    })
}

function Ov_bt_click(){
    const overlay_button1=document.querySelectorAll(".overlay_button1")
    overlay_button1.forEach((e)=>{
            e.addEventListener("click", ()=>{
              if(e.style.color !="red")
                e.style.color="red";
              else
                e.style.color="#5cdbcd";
            })
        }) 
}

// fetch movie from praveen sharma movie

const Movies_Apikey = "307241fab212243091c77c75d3b197fb";
const KEY = "AIzaSyC4sKho0Y3wRYJ14nb7-nqDA8dSln_23_w";
const apiEndpoint = "https://api.themoviedb.org/3"
const imgPath = "https://image.tmdb.org/t/p/original";

const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${Movies_Apikey}`,
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${Movies_Apikey}&with_genres=${id}`,
    fetchTrending:`${apiEndpoint}/trending/all/day?api_key=${Movies_Apikey}&language=en-US`,
    searchOnYoutube: (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${KEY}`
}

function init() {
    fetchTrendingMovies();
    fetchAndBuildAllSections();
}

function fetchTrendingMovies(){
    fetchAndBuildMovieSection(apiPaths.fetchTrending, 'Trending now')
    .then(list => {
        const randomIndex = parseInt(Math.random() * list.length);
        BuildBannerSection(list[randomIndex]);
        BuildMoviesTop10(list.slice(0,9));
    }).catch(err=>{
        console.error(err);
    });
}

function BuildBannerSection(movie){
    const bannerCont = document.getElementById('container2_id');
    const poster_img1_id = document.getElementById('poster_img1_id');
    const posterpath="https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg";
    
    const div1=document.createElement('div');
    div1.innerHTML = `
        <img  src="${imgPath}${movie.backdrop_path ? movie.backdrop_path :posterpath}" alt="no_image" >
    `;

    const div = document.createElement('div');
    div.className="Banner_container"
    div.innerHTML = `
            <div class="content">
                <div class="first"><span><img src="Logo/[CITYPNG.COM]Vector Netflix Logo - 512x512.png" alt=""></span>
                 <span class="series">${movie.media_type}</span></div>
                <div class="text_name_div"><h1 id="text_name">${movie.title ? movie.title : "N MOVIES"}</h1></div>
                <div class="P_name_id"><p id="P_name">${movie.overview && movie.overview.length > 150 ? movie.overview.slice(0,150).trim(20)+ '...':movie.overview}</p></div>
            </div>
            <div class="buttons">
                <div class="play" onclick="SearchMovieTrailer('${movie.title}', 'yt${movie.id}')"><ion-icon name="play-outline" class="ion"></ion-icon>Play</div>
                <div class="more"><a href="#">More info</a></div>
            </div> 
        `;

    poster_img1_id.append(div1);
    bannerCont.append(div);
}

function BuildMoviesTop10(list){
    const card1= document.getElementById('image-box-id');
    var number_array=["0","1","2","3","4","5","6","7","8","10"];
    var text_index=0;

    const moviesListHTML2 = list.map(item => {
        return `
                <div class="number">${number_array[text_index=text_index+1]}</div>
                <div class="movie2">
                    <div class="movie_img"><img src="${imgPath}${item.poster_path}" alt="Wait for network"></div>
                    <div class="top10_img"><img src="Logo/grunge-top-10-label-png.png" alt="Wait for network"></div>
                    <div class="overlay">
                       <div><ion-icon></ion-icon></ion-icon></div>
                        <div>
                        <div class="overlay_p"><p>${item.title ?item.title :"Movies"}</p></div>
                        <div class="overlay_bu"><div class="overlay_button_play" onclick="SearchMovieTrailer('${item.title}', 'yt${item.id}')"><ion-icon name="play-outline" class="overlay_icon"></ion-icon>Play</div></div>
                    </div>    
                </div>
                 </div>`;
         }).join('');
        
    card1.innerHTML = moviesListHTML2;
}

function BuildMoviesCards(list, categoryName){
    const card= document.getElementById('container4_id');
    
    const moviesListHTML1 = list.map(item => {
        return `
                <div class="card">
                <div class="child_card">
                    <img  src="${imgPath}${item.poster_path}" alt="no_image" >
                    <div class="like_heart">
                        <span><h4>${item.vote_average}</h4></span>
                        <ion-icon name="heart-outline" class="rate_button"></ion-icon>
                        <ion-icon name="heart-outline" class="rate_button"></ion-icon>
                        <ion-icon name="heart-outline" class="rate_button"></ion-icon>
                        <ion-icon name="heart-outline" class="rate_button"></ion-icon>
                        <ion-icon name="heart-outline" class="rate_button"></ion-icon>
                    </div>
                </div>
                <div class="image_content">
                    <div class="image_content_h1"><h1>${item.title ? item.title : "TOP MOVIE"}</h1></div>
                    <div class="image_content_p"><p>${item.overview && item.overview.length > 180 ? item.overview.slice(0,180).trim(20)+ '...':item.overview}</p></div>    
                </div>
                <div class="div_line">
                </div>
                </div>`;
         }).join('');

    card.innerHTML = moviesListHTML1;
}

function fetchAndBuildAllSections(){
    fetch(apiPaths.fetchAllCategories)
    .then(res => res.json())
    .then(res => {
        const categories = res.genres;
        if (Array.isArray(categories) && categories.length) {
            categories.slice(0,25).forEach(category => {
                fetchAndBuildMovieSection(
                    apiPaths.fetchMoviesList(category.id),
                    category.name
                );
            });
        }

    })
    .catch(err=>console.error(err));
}

function fetchAndBuildMovieSection(fetchUrl, categoryName){
    console.log(fetchUrl,categoryName);
    return fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        const movies = res.results;
        if (Array.isArray(movies) && movies.length) {
            BuildMoviesSection(movies.slice(0,25), categoryName);
            BuildMoviesCards(movies.slice(0,6), categoryName);
        }
        return movies;
    })
    .catch(err=>console.error(err))
}

function BuildMoviesSection(list, categoryName){
    const moviesContainer = document.getElementById('movies-container');
    
    const moviesListHTML = list.map(item => {
        return `
        <div class="movie" >
            <div class="movie_img"><img src="${imgPath}${item.poster_path}" alt="${item.title}" /></div>
            <div class="overlay">
                <div><span class="rating">${item.vote_average}</span><ion-icon name="heart-circle-sharp" class="overlay_button1" onclick="Ov_bt_click()"></ion-icon></ion-icon></div>
                <div>
                    <div class="overlay_p"><p>${item.title ?item.title :"Movies"}</p></div>
                    <div class="overlay_bu"><div class="overlay_button_play" onclick="SearchMovieTrailer('${item.title}', 'yt${item.id}')"><ion-icon name="play-outline" class="overlay_icon"></ion-icon>Play</div></div>
                </div>    
            </div>
        </div>
        <div class="movies_trailer" id="yt${item.id}">
            
        </div>`;
    }).join('');

    const moviesSectionHTML = `
        <div class="poster"><h1>${categoryName}</h1></div>
        <div class="images-box">
            ${moviesListHTML}
        </div>
    `
    const div = document.createElement('div');
    div.className = "movies-section"
    div.innerHTML = moviesSectionHTML;

    moviesContainer.append(div);
}

function SearchMovieTrailer(movieName, iframId) {
    if (!movieName) return;

    fetch(apiPaths.searchOnYoutube(movieName))
    .then(res => res.json())
    .then(res => {
        const bestResult = res.items[0];
        const elements = document.getElementById(iframId);
        const div = document.createElement('div');
        div.classList="trailer_frame"
        div.innerHTML = `<div><button class="exit_bt" onclick="exit_bt()""><ion-icon name="close-outline" class="exit_icon"></ion-icon></button></div>
        <iframe src="https://www.youtube.com/embed/${bestResult.id.videoId}?autoplay=0&controls=0"></iframe>
        `
        elements.append(div);    
        
    })
    .catch(err=>console.log(err));
}

window.addEventListener('load',function() {
    init();
})

// searchand fetch all movies

const search_container=document.querySelector(".search_container");
const search_button_id=document.getElementById("search_button_id");
search_button_id.addEventListener('click',()=>{
const search_container_id=document.getElementById("search_container_id");
const input_id=document.getElementById("input_id");
    search_container_id.innerHTML="";
    fetch(`https://omdbapi.com/?s=${input_id.value}&page=1&apikey=202bbdff`)
    .then(a => a.json())
    .then(response =>{
        search_container_id.style.display="block";
        search_container.style.display="block";
        for (var i=0; i<10; i++){
        search_container_id.innerHTML+=
        "<img src="+response.Search[i].Poster+" style='height: 50px; width: 50px;'/>"+
        "<h3>"+response.Search[i].Title+"</h3>"+
        "<h1>"+response.Search[i].Year+"</h1>"+
        "<h1>"+response.Search[i].Type+"</h1>"
        ;
      }});
});
const close_id=document.getElementById("close_id");
close_id.addEventListener("click", ()=>{
    search_container.classList.toggle('hide-search-list');
})

