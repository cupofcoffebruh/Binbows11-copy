  //WidgetsClock//
     
  


      //Clock//
      class DigitalClock {
        constructor(element) {
          this.element = element;
        }
      
        start() {
          this.update();
      
          setInterval(() => {
            this.update();
          }, 500);
        }
      
        update() {
          const parts = this.getTimeParts();
          const minuteFormatted = parts.minute.toString().padStart(2, "0");
          const timeFormatted = `${parts.hour}:${minuteFormatted}`;
          const amPm = parts.isAm ? "AM" : "PM";
      
          this.element.querySelector(".clock-time").textContent = timeFormatted;
          this.element.querySelector(".clock-ampm").textContent = amPm;
        }
      
        getTimeParts() {
          const now = new Date();
      
          return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
          };
        }
      }
      
      const clockElement = document.querySelector(".clock");
      const clockObject = new DigitalClock(clockElement);
      
      clockObject.start();
      
      
        
      
      
      
      
      //calendar//
      const date = new Date();
      
      const renderCalendar = () => {
        date.setDate(1);
      
        const monthDays = document.querySelector(".days");
      
        const lastDay = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDate();
      
        const prevLastDay = new Date(
          date.getFullYear(),
          date.getMonth(),
          0
        ).getDate();
      
        const firstDayIndex = date.getDay();
      
        const lastDayIndex = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDay();
      
        const nextDays = 7 - lastDayIndex - 1;
      
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
      
        document.querySelector(".date h1").innerHTML = months[date.getMonth()];
      
        document.querySelector(".date p").innerHTML = new Date().toDateString();
      
        let days = "";
      
        for (let x = firstDayIndex; x > 0; x--) {
          days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }
      
        for (let i = 1; i <= lastDay; i++) {
          if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
          ) {
            days += `<div class="today">${i}</div>`;
          } else {
            days += `<div>${i}</div>`;
          }
        }
      
        for (let j = 1; j <= nextDays; j++) {
          days += `<div class="next-date">${j}</div>`;
          monthDays.innerHTML = days;
        }
      };
      
      document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
      });
      
      document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
      });
      
      renderCalendar();
      
      
      //Clock Calendar//
      
      
      let clock = document.querySelector(".clock");
      let calendar = document.querySelector(".calendar");
      
      
      clock.onclick = function(){
        calendar.classList.toggle("active")
        xd.classList.remove("active")
        startmenu.classList.remove("active")
        Widgets_panel.classList.remove("opened")
        search_menu.classList.remove("opened");
        pinned_app_container.classList.remove("all_apps_state");
        used_apps.classList.remove("all_apps_state");
        search_bar.classList.remove("all_apps_state");
        start_menu_header.classList.remove("all_apps_state");
        backbutton.classList.remove("all_apps_state");
        recommended.classList.remove("all_apps_state"); 
        all_apps_text.classList.remove("all_apps_state");
        all_apps_container.classList.remove("all_apps_state");
      }
      //startmenu//
      
      let startmenu = document.querySelector(".startmenu");
      ;
      
      
      
      icon.onclick = function (){
        startmenu.classList.toggle("active");
        search_menu.classList.remove("opened");
        pinned_app_container.classList.remove("all_apps_state");
        used_apps.classList.remove("all_apps_state");
        search_bar.classList.remove("all_apps_state");
        start_menu_header.classList.remove("all_apps_state");
        backbutton.classList.remove("all_apps_state");
        recommended.classList.remove("all_apps_state"); 
        all_apps_text.classList.remove("all_apps_state");
        all_apps_container.classList.remove("all_apps_state");
        xd.classList.remove("active")
        calendar.classList.remove("active")
        Widgets_panel.classList.remove("opened")
      }

   
      window.onclick = function(event) {
        event.preventDefault();
        if (!event.target.matches('#icon')) {
          var dropdowns = document.getElementsByClassName("startmenu");
        /*  var i;
          for (i = 0; i < dropdowns.length; i++) {*/
           // var openDropdown = dropdowns ;
            if (dropdowns.classList.contains('active')) {
              dropdowns.classList.remove('active');
            }
          }
      }
      
        
      
     
     

      //Widgets panel//
      let Widgets_panel = document.querySelector(".widgets-container");
      let icon3 = document.querySelector("#icon3")
      ;
      
      
      
      icon3.onclick = function(){
        Widgets_panel.classList.toggle("opened")
        startmenu.classList.remove("active");
        search_menu.classList.remove("opened");
        xd.classList.remove("active")
        calendar.classList.remove("active");
      }
      //Active App indicator//
      
      
      
      //QuickSettings//
      let QuickSettings = document.querySelector(".Quick_Settings");
      let  xd  = document.querySelector(".Quick-Settings-Container");
      ;
      
      
      
      QuickSettings.onclick = function(){
        xd.classList.toggle("active")
        calendar.classList.remove("active")
        startmenu.classList.remove("active")

        search_menu.classList.remove("opened");
        pinned_app_container.classList.remove("all_apps_state");
        used_apps.classList.remove("all_apps_state");
        search_bar.classList.remove("all_apps_state");
        start_menu_header.classList.remove("all_apps_state");
        backbutton.classList.remove("all_apps_state");
        recommended.classList.remove("all_apps_state"); 
        all_apps_text.classList.remove("all_apps_state");
        all_apps_container.classList.remove("all_apps_state");
        Widgets_panel.classList.remove("opened")
      }
      //Quick Acces//
      
      let element = document.querySelector(".settings-column");
      ;
      
      
      
      element.onclick = function(){
        element.classList.toggle("active")
        
      
      }
      let power_button = document.querySelector(".dropbtn");
      let theme_toogle = document.querySelector(".settings-column5");
    let  main_to_dark = document.querySelector("main");
      let audio_invert = document.querySelector("#function")
      let night_light = document.querySelector("#night_light");
      let battery_saver = document.querySelector("#battery_saver");
      let brightness = document.querySelector("#brightness");
      theme_toogle.onclick = function(){
        theme_toogle.classList.toggle("active");
        main_to_dark.classList.toggle("dark_theme");
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
          icon2.classList.add("invert");
          audio_invert.classList.add("invert");
          night_light.classList.add("invert");
          battery_saver.classList.add("invert");
          brightness.classList.add("invert"); 
          power_button.classList.add("invert");
          audio_mute.classList.add("invert");
           audio_one.classList.add("invert");
           audio.classList.add("invert");
           audio_max.classList.add("invert");
        }else{
          power_button.classList.remove("invert");
          audio_mute.classList.remove("invert");
          audio_one.classList.remove("invert");
          audio.classList.remove("invert");
          audio_max.classList.remove("invert");
          icon2.classList.remove("invert");
          brightness.classList.remove("invert");
          audio_invert.classList.remove("invert");
          night_light.classList.toggle("invert");
         battery_saver.classList.toggle("invert");
        }
      }
    /*  let fuckwindow = document.querySelector(".Window")
      if(fuckwindow.classList.contains("addcenter33")){
        square.onclick = function(){
          fuckwindow.classList.add("Active");
          Window.classList.remove("SmallScreen");
        }
      }*/
      
      //settings-column1//
      let idk = document.querySelector(".settings-column1");
      ;
      
      
      idk.onclick = function(){
        idk.classList.toggle("active")
        
      
      }
      
      //settings-column2//
      let idk2 = document.querySelector(".settings-column2");
      let  NightLightOverlay = document.querySelector(".NightLightOverlay");
      ;
      
      
      idk2.onclick = function(){
        idk2.classList.toggle("active")
        NightLightOverlay.classList.toggle("active")
        night_light.classList.toggle("invert");
      }
      
      
      
      
      
      let idk3 = document.querySelector(".settings-column3");
      ;
      
      
      
      idk3.onclick = function(){
        idk3.classList.toggle("active");
        battery_saver.classList.toggle("invert");
      
      }
      
      let idk4 = document.querySelector(".settings-column4");
      ;
      
      
      
      idk4.onclick = function(){
        idk4.classList.toggle("active")
        
      
      }
     
      let idk6 = document.querySelector(".settings-column6");
      
      
      
      idk6.onclick = function(){
        idk6.classList.toggle("active")
        
      
      }
      let idk7 = document.querySelector(".settings-column7");
      
      
      
      idk7.onclick = function(){
        idk7.classList.toggle("active")
        
      
      }
      let idk8 = document.querySelector(".settings-column8");
      
      
      
      idk8.onclick = function(){
        idk8.classList.toggle("active")
        
      
      }
      
      
      
      
      
      
      
      
      
      
     
     
      
      
      
      
      
       //Preloader//
       var loader = document.getElementById("preloader");
      
      window.addEventListener("load", function(){
        loader.style.display = "none";
        
      })
      
      
      
      /*DropDown*/
      /*When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
      
      
      window.addEventListener("contextmenu",function(event){
        event.preventDefault();
        var contextElement = document.getElementById("context-menu");
        contextElement.style.top = event.offsetY + "px";
        contextElement.style.left = event.offsetX + "px";
        contextElement.classList.add("active");
      });
      window.addEventListener("click",function(){
        document.getElementById("context-menu").classList.remove("active");
      });
      
      
      
      
      
      // Window //
      let xdk = document.querySelector(".xdk");
      let Window = document.querySelector(".Window");
      let Window_header = document.querySelector(".Window-header");
      let square = document.querySelector(".bx-square");
      let Numbergrid = document.querySelector(".Number-grid");
      let rpogjifhg = document.querySelector(".Window");
      ;
      
     
    /*  if(Window.classList.contains("")){
        square.onclick = function(){
          Window.classList.toggle("SmallScreen");
         Numbergrid.classList.toggle("SmallScreen");
         rpogjifhg.classList.remove("pls_work_window_brain_fuck");
        }
      }*/
     /* rpogjifhg.classList.add("pls_work_window_brain_fuck");*/
     Window_header.classList.add("SmallScreen");
      square.onclick = function(){
        wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        //resizer_window.style.height = `${0 + 0}px`
      //  square.src ="/Users/Dell/Documents/maxmin.png";
       header.classList.remove("active");
      Window.classList.toggle("SmallScreen");
        xdk.classList.toggle("SmallScreen");
       Numbergrid.classList.toggle("SmallScreen");
      rpogjifhg.classList.remove("pls_work_window_brain_fuck");
       number_column_addright_top50.classList.remove("addright_top");
        window_multitask8.classList.remove("addright_top50");
        window_multitask7.classList.remove("addleft50trio");
        window_multitask6.classList.remove("addleft33");
        window_multitask5.classList.remove("addcenter33");
        window_multitask.classList.remove("addleft50");
        window_multitask1.classList.remove("addright50");
        window_multitask2.classList.remove("addleft75");
        window_multitask3.classList.remove("addright25");
        window_multitask4.classList.remove("addright33");
        window_multitask9.classList.remove("addright_bottom");
        window_multitask10.classList.remove("addleft_top");
        window_multitask12.classList.remove("addsomething");
        window_multitask13.classList.remove("left-bottom");
        window_multitask14.classList.remove("right4-bottom");
        window_multitask15.classList.remove("asdw");
        window_multitask16.classList.remove("center50");
        window_multitask17.classList.remove("right25");
      show_number.classList.remove("addright_top");
  history.classList.remove("addright_top");
  Window.classList.remove("set_brd_rds");
  /*square.classList.toggle("maxmin");*/
 
  resizer_window4.style.width = `${null + 100 }%`
  
 // resizer_window4.style.width = `${a + e}px`
    resizer_window4.style.height = `${null + 96}%`
    //resizer_window4.style.width = `${100 + 0}%`

  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");

  /*resizer_window.style.height = `${0 + 0}px`*/
   /*if(Window.classList.contains("Active")){
    resizer_window4.style.width = `${null + 0 }px`
   }*/
    
 
      }
      
  
     
       /* if(Window.classList.contains("addleft33")){
          square.onclick = function(){
            Window.classList.remove("Active");
            //Window.classList.toggle("SmallScreen");
            Window.classList.remove("SmallScreen");
            Numbergrid.classList.toggle("SmallScreen");
            wrapper.style.left = `${0 + 0}px`,
            wrapper.style.top = `${0 + 0}px`
    
          }*/
        
        /*else{
          square.onclick = function(){
            wrapper.style.left = `${0 + 0}px`,
            wrapper.style.top = `${0 + 0}px`
            window_multitask6.classList.remove("addleft33");
         /* Window.classList.toggle("SmallScreen");*/
         /*Numbergrid.classList.add("SmallScreen");
        Window.classList.toggle("SmallScreen");
          //Window.classList.add("Active");
          }
        }*/
      

      /*  if(Window.classList.contains("addleft50")){
          square.onclick = function(){
            wrapper.style.left = `${0 + 0}px`,
            wrapper.style.top = `${0 + 0}px`
            /*header.classList.remove("active");*/
        /*   Window_header.classList.remove("SmallScreen");
           Window.classList.remove("SmallScreen");
          //  xdk.classList.toggle("SmallScreen");
          Window.classList.add("active")
           Numbergrid.classList.remove("SmallScreen");*/
         //  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
       /*    number_column_addright_top50.classList.remove("addright_top");
            window_multitask8.classList.remove("addright_top50");
            window_multitask7.classList.remove("addleft50trio");
            window_multitask6.classList.remove("addleft33");
            window_multitask5.classList.remove("addcenter33");
            window_multitask.classList.remove("addleft50");
            window_multitask1.classList.remove("addright50");
            window_multitask2.classList.remove("addleft75");
            window_multitask3.classList.remove("addright25");
            window_multitask4.classList.remove("addright33");
            window_multitask9.classList.remove("addright_bottom");
            window_multitask10.classList.remove("addleft_top");
            window_multitask12.classList.remove("addsomething");
            window_multitask13.classList.remove("left-bottom");
            window_multitask14.classList.remove("right4-bottom");
            window_multitask15.classList.remove("asdw");
            window_multitask16.classList.remove("center50");
            window_multitask17.classList.remove("right25");
          }

        
        }
        

      }*/
      




      let pinned_app_container = document.querySelector(".pinned-app-container");
      let all_apps_button = document.querySelector(".allappsbutton");
      let used_apps = document.querySelector(".used-apps-container");
      let search_bar = document.querySelector(".Search-Bar");
      let start_menu_header = document.querySelector(".startmenu_header");
      let backbutton = document.querySelector(".back-button");
      let recommended = document.querySelector(".recommended");
      let all_apps_text = document.querySelector(".all_apps");
      let all_apps_container = document.querySelector(".all_apps_container");
     /* let  = document.querySelector("");
      let  = document.querySelector("");
      let  = document.querySelector("");*/
      ;
      
      
      
      all_apps_button.onclick = function(){
        pinned_app_container.classList.toggle("all_apps_state");
        used_apps.classList.toggle("all_apps_state");
      /*  search_bar.classList.toggle("all_apps_state");*/
        start_menu_header.classList.toggle("all_apps_state");
        backbutton.classList.toggle("all_apps_state");
        recommended.classList.toggle("all_apps_state"); 
        all_apps_text.classList.toggle("all_apps_state");
        all_apps_container.classList.toggle("all_apps_state");
      } 

      backbutton.onclick = function(){
        pinned_app_container.classList.toggle("all_apps_state");
        used_apps.classList.toggle("all_apps_state");
        /*search_bar.classList.toggle("all_apps_state");*/
        start_menu_header.classList.toggle("all_apps_state");
        backbutton.classList.toggle("all_apps_state");
        recommended.classList.toggle("all_apps_state");
        all_apps_text.classList.toggle("all_apps_state");
        all_apps_container.classList.toggle("all_apps_state");
      }
      
      
      let window2 = document.querySelector(".Window SmallScreen");
      let window1 = document.querySelector(".Window");
      let close1 = document.querySelector(".bx-x");
      let line123 = document.querySelector(".line");
      
      ;
      
      
      
      close1.onclick = function(){
        Window.classList.toggle("Active");
        line.classList.remove("notactive");
        line.classList.remove("active");

      }

     let windowsmallscreen = document.querySelector(".Window SmallScreen");

      let iconcalc = document.querySelector("#icon7");

      /*if ( windowsmallscreen.classList.contains("SmallScreen")){
        iconcalc.onclick = function(){
          windowsmallscreen.classList.remove("SmallScreen");
          }
      }*/
    
    /*  close1.onclick = function(){
        line123.classList.toggle("transparent");
        window1.classList.toggle("Display-None");
         window2.classList.toggle("Display-None");
      }*/
      
      //To TaskBar//
      let line = document.querySelector(".line");
      let icon7 = document.querySelector("#icon7");
      let calc_open = document.querySelector("#calc_open")
      let totaskbar = document.querySelector(".bx-minus");
      let  widow1234 = document.querySelector(".Window Active");
      let taskbar = document.querySelector(".Nav-Container ul ");
      let context_menu_option = document.querySelector("#left");
      
      context_menu_option.onclick = function(){
      taskbar.classList.toggle("left");
      }
      totaskbar.onclick = function(){
      Window.classList.toggle("Active");
        line.classList.toggle("notactive");
        line.classList.add("active");
        
      } 
      
      icon7.onclick = function(){
        line.classList.toggle("notactive");
        line.classList.add("active");
        header.classList.remove("active");
        wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        xd.classList.remove("active")
        startmenu.classList.remove("active");
        search_menu.classList.remove("opened");
        calendar.classList.remove("active");
        Window.classList.toggle("Active");
        Window.classList.remove("SmallScreen");
        Numbergrid.classList.remove("SmallScreen");
        window_multitask8.classList.remove("addright_top50");
        window_multitask7.classList.remove("addleft50trio");
        window_multitask6.classList.remove("addleft33");
        window_multitask5.classList.remove("addcenter33");
        window_multitask.classList.remove("addleft50");
        window_multitask1.classList.remove("addright50");
        window_multitask2.classList.remove("addleft75");
        window_multitask3.classList.remove("addright25");
        window_multitask4.classList.remove("addright33");
        window_multitask9.classList.remove("addright_bottom");
        window_multitask10.classList.remove("addleft_top");
        window_multitask12.classList.remove("addsomething");
        window_multitask13.classList.remove("left-bottom");
        window_multitask14.classList.remove("right4-bottom");
        window_multitask15.classList.remove("asdw");
        window_multitask16.classList.remove("center50");
        window_multitask17.classList.remove("right25");
        show_number.classList.remove("addright_top");
        history.classList.remove("addright_top");
        number_vals.classList.remove("addright_top");
        number_column_addright_top50.classList.remove("addright_top");
       /* resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${100 + 0}%`*/
    

      }
      calc_open_pinned.onclick = function(){
       line.classList.add("notactive");
        line.classList.add("active");
        Window.classList.add("Active");
        startmenu.classList.remove("active");
        Window.classList.remove("SmallScreen");
        Numbergrid.classList.remove("SmallScreen");
      
      }

      calc_open_all_apps.onclick = function(){
        line.classList.add("notactive");
        line.classList.add("active");
        Window.classList.add("Active");
        Window.classList.remove("SmallScreen");
        Numbergrid.classList.remove("SmallScreen");
        startmenu.classList.remove("active");
        pinned_app_container.classList.remove("all_apps_state");
        used_apps.classList.remove("all_apps_state");
        search_bar.classList.remove("all_apps_state");
        start_menu_header.classList.toggle("all_apps_state");
        backbutton.classList.remove("all_apps_state");
        recommended.classList.remove("all_apps_state"); 
        all_apps_text.classList.remove("all_apps_state");
        all_apps_container.classList.remove("all_apps_state");
      }


     
    
      //Search-Bar//
      //Volume slider//
      const progressbar = document.querySelector(".progressbar");
      const slideValue = document.querySelector(".sliderValue span");
            const inputSlider = document.querySelector(".field input");
            inputSlider.oninput = (()=>{
              let value = inputSlider.value;
              slideValue.textContent = value;
              slideValue.style.left = (value/1.5) + "%";
              progressbar.style.width = (value/1.4) + "%";
          /*    BrightnessOverlay.style.opacity = (value/1) + "%";*/
             slideValue.classList.add("show");
            });
            inputSlider.onblur = (()=>{
              slideValue.classList.remove("show");
            });
      
            //rangeInput = document.getElementById('range');

            /*container123 = document.getElementsByClassName('body')[0];*/
            let body_on_brightness_change = document.querySelector("body");
            inputSlider.addEventListener("mousemove",function(){
              body_on_brightness_change.style.filter = "brightness(" + inputSlider.value + "%)";
            });
       /*     const progressbar1 = document.querySelector(".progressbar1");
      const slideValue1 = document.querySelector(".sliderValue1 span");*/
     /* const Value = document.querySelector(".sliderValue1");*/
      const audio = document.querySelector("#audio");
      const audio_mute = document.querySelector("#audio_mute");
const audio_one = document.querySelector("#audio_one");
const audio_max = document.querySelector("#audio_max");
           /* const inputSlider1 = document.querySelector(".field1 input");*/
/*
            inputSlider1.oninput = (()=>{
              let value = inputSlider1.value;
              slideValue1.textContent = value;
              slideValue1.style.left = (value/1) + "";
              progressbar1.style.width = (value/1.2) + "%";
              Value.style.left = (value/1.5) + "%";
              slideValue1.classList.add("show");



           
            
            });
            inputSlider1.onblur = (()=>{
              slideValue1.classList.remove("show");
            });
           */
 
/*to audio icons*/





  /*audio_mute.classList.add("hidden");
  audio_one.classList.add("hidden");
  audio.classList.remove("hidden");
  audio_max.classList.add("hidden");*/
  const progressbar1 = document.querySelector(".progressbar1");
  const inputSlider1 = document.querySelector(".field1 input");
  const slideValue1 = document.querySelector(".sliderValue1 span");


  inputSlider1.onblur = (()=>{
    slideValue1.classList.remove("show");
  });

  inputSlider1.oninput = function(){


    let value = inputSlider1.value;
    inputSlider1.textContent = value;
    progressbar1.style.width = (value/1.2) + "%";
    slideValue1.textContent = value;
   slideValue1.style.left = (value/1.5) + "%";
    slideValue1.classList.add("show");

    
    slideValue1.textContent = value;
  // slideValue1.style.left = (value/1) + "%";
    if (this.value < 1){
    
      audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio_mute.png" ;
      on_change_audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio_mute.png" ;
    }
  
    else if (this.value >= 25 && this.value < 50 ) {
    
      audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio_level1.png" ;
      on_change_audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio_level1.png" ;
    }
    else if (this.value >= 50 && this.value < 75 ) {
      audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio2.png" ;
      on_change_audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio2.png" ;
    }
     else if (this.value >= 100) {
      audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio3.png" ;
      on_change_audio.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/audio3.png" ;
    }
}
            
let on_change_audio = document.querySelector("#function");
           // Draggebla Window//
         /* const wrapper = document.querySelector(".Window Smallscreen "),
          header = wrapper.querySelector(".Window-header");
          function onDrag({movementX, movementY}){
            let getStyle = window.getComputedStyle(wrapper);
            let leftVal = parseInt(getStyle.left);
            let topVal = parseInt(getStyle.top);
            wrapper.style.left = `${leftVal + movementX}px`;
            wrapper.style.top = `${topVal + movementY}px`;
          }
          header.addEventListener("mousedown", ()=>{
            header.classList.add("active");
            header.addEventListener("mousemove", onDrag);
          });
          document.addEventListener("mouseup", ()=>{
            header.classList.remove("active");
            header.removeEventListener("mousemove", onDrag);
          });*/

/*Multi task fuctions*/


let column_left = document.querySelector(".column-left");
let window_multitask = document.querySelector(".Window");

;



column_left.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask.classList.add("addleft50");
  window_multitask1.classList.remove("addright50");
  window_multitask2.classList.remove("addleft75");
  window_multitask3.classList.remove("addright25");
  window_multitask4.classList.remove("addright33");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        resizer_window.style.height = `${0 + 0}px`
        
        Numbergrid.classList.add("multi_task_grid")
        Window.classList.remove("set_brd_rds");


       /* resizer_window4.style.width = `${0 + 0}px`*/
    resizer_window4.style.height = `${96 + 0}%`
    resizer_window4.style.width = `${50 + 0}%`
}


/*toright*/

let column_right = document.querySelector(".column-right");
let window_multitask1 = document.querySelector(".Window");

;



column_right.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask1.classList.add("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask2.classList.remove("addleft75");
  window_multitask3.classList.remove("addright25");
  window_multitask4.classList.remove("addright33");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
} 


/*toleft75*/

let column_left1 = document.querySelector(".column-left1");
let window_multitask2 = document.querySelector(".Window");

;



column_left1.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask2.classList.add("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask3.classList.remove("addright25");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${75 + 0}%`
} 

/*toright25*/

let column_right1 = document.querySelector(".column-right1");
let window_multitask3 = document.querySelector(".Window");

;



column_right1.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.add("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  Numbergrid.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
  wrapper.style.top = `${0 + 0}px`
  Window.classList.remove("set_brd_rds");
  resizer_window4.style.height = `${96 + 0}%`
  resizer_window4.style.width = `${25 + 0}%`
}
/*toleft33%*/

let column_left2 = document.querySelector(".column-left2");
let window_multitask4 = document.querySelector(".Window");

;



column_left2.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  Numbergrid.classList.remove("SmallScreen")
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.add("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${33.3333333 + 0}%`
} 

/*tocenter33*/
let column_left2_center_item = document.querySelector(".column-left2_center_item");
let window_multitask5 = document.querySelector(".Window");

;



column_left2_center_item.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  Numbergrid.classList.remove("SmallScreen")
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.add("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  //rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${33.33333333 + 0}%`
}
/*toleft33*/
let column_right2 = document.querySelector(".column-right2");
let window_multitask6 = document.querySelector(".Window");

;



column_right2.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.add("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${33.33333333 + 0}%`
} 



/*tri position columns*/
let column_left3 = document.querySelector(".column-left3");
let window_multitask7 = document.querySelector(".Window");

;



column_left3.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
  number_vals.classList.remove("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.add("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
} 


/*trio top column*/
let column_right3_top = document.querySelector(".column-right3-top");
let window_multitask8 = document.querySelector(".Window");
let number_column_addright_top50 = document.querySelector(".Number-grid");
let number_vals = document.querySelector(".Number-vals");
let show_number = document.querySelector(".Show-Number");
let history = document.querySelector(".history");
;



column_right3_top.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_vals.classList.add("addright_top");
  number_column_addright_top50.classList.add("addright_top");
  window_multitask8.classList.add("addright_top50");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${50 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
} 


/*leftbottom*/
let column_right3_bottom = document.querySelector(".column-right3-bottom");
let window_multitask9 = document.querySelector(".Window");

;



column_right3_bottom.onclick = function(){
  window_multitask9.classList.add("addright_bottom");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_vals.classList.add("addright_top");
  Numbergrid.classList.remove("SmallScreen")
  number_column_addright_top50.classList.add("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${50 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
} 
/*left4 top*/
let column_left4_top = document.querySelector(".column-left4-top");
let window_multitask10 = document.querySelector(".Window");

;



column_left4_top.onclick = function(){
  window_multitask10.classList.add("addleft_top");
  history.classList.add("addright_top");
  Numbergrid.classList.remove("SmallScreen")
  show_number.classList.add("addright_top");
  number_vals.classList.add("addright_top");
  number_column_addright_top50.classList.add("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${50 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
} 


/*top right*/

let column_left4_bottom = document.querySelector(".column-left4-bottom");
let window_multitask12 = document.querySelector(".Window");

;



column_left4_bottom.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  window_multitask12.classList.add("addsomething");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_vals.classList.add("addright_top");
  number_column_addright_top50.classList.add("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
   window_multitask15.classList.remove("asdw");
   window_multitask16.classList.remove("center50");
   window_multitask17.classList.remove("right25");
   Window.classList.remove("SmallScreen");
   rpogjifhg.classList.remove("pls_work_window_brain_fuck");
   wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${50 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`

} 


/*bottom_left*/
let column_right4_top = document.querySelector(".column-right4-top");
let window_multitask13 = document.querySelector(".Window");

;



column_right4_top.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  window_multitask13.classList.add("left-bottom");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_vals.classList.add("addright_top");
  number_column_addright_top50.classList.add("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${50 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`

} 





let column_right4_bottom = document.querySelector(".column-right4-bottom");
let window_multitask14 = document.querySelector(".Window");

;



column_right4_bottom.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  window_multitask14.classList.add("right4-bottom");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_vals.classList.add("addright_top");
  number_column_addright_top50.classList.add("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${50 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
} 


let column_left5 = document.querySelector(".column-left5");
let window_multitask15 = document.querySelector(".Window");
let number_vals1 = document.querySelector(".Number-vals");
;



column_left5.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  window_multitask15.classList.add("asdw");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right-bottom");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${25 + 0}%`
} 



let column_left5_center_item = document.querySelector(".column-left5_center_item");
let window_multitask16 = document.querySelector(".Window");
;



column_left5_center_item.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  window_multitask16.classList.add("center50");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${50 + 0}%`
}
let column_right5 = document.querySelector(".column-right5");
let window_multitask17 = document.querySelector(".Window");
;



column_right5.onclick = function(){
  Numbergrid.classList.remove("SmallScreen")
  window_multitask17.classList.add("right25");
  history.classList.add("addright_top");
  show_number.classList.add("addright_top");
  number_column_addright_top50.classList.remove("addright_top");
  window_multitask8.classList.remove("addright_top50");
  window_multitask7.classList.remove("addleft50trio");
  window_multitask6.classList.remove("addleft33");
  window_multitask5.classList.remove("addcenter33");
  window_multitask4.classList.remove("addright33");
  window_multitask3.classList.remove("addright25");
  window_multitask2.classList.remove("addleft75");
  window_multitask1.classList.remove("addright50");
  window_multitask.classList.remove("addleft50");
  window_multitask9.classList.remove("addright_bottom");
  window_multitask10.classList.remove("addleft_top");
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center");
  Window.classList.remove("SmallScreen");
  rpogjifhg.classList.remove("pls_work_window_brain_fuck");
  wrapper.style.left = `${0 + 0}px`,
        wrapper.style.top = `${0 + 0}px`
        Window.classList.remove("set_brd_rds");
        resizer_window4.style.height = `${96 + 0}%`
        resizer_window4.style.width = `${25 + 0}%`
}



let option_selected = document.querySelector("#option_selected");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

option_selected.classList.add("active");
option_selected.onclick = function(){
option_selected.classList.add("active");
option1.classList.remove("selected1");
  option3.classList.remove("selected3");
  option2.classList.remove("selected2");
  option4.classList.remove("selected4");
}
option1.onclick = function(){
  option1.classList.add("selected1");
  option3.classList.remove("selected3");
  option2.classList.remove("selected2");
  option4.classList.remove("selected4");
  option_selected.classList.remove("active");
}
option2.onclick = function(){
  option2.classList.add("selected2");
  option3.classList.remove("selected3");
  option1.classList.remove("selected1");
  option4.classList.remove("selected4");
  option_selected.classList.remove("active");
}
option3.onclick = function(){
  option3.classList.add("selected3");
  option2.classList.remove("selected2");
  option1.classList.remove("selected1");
  option4.classList.remove("selected4");
  option_selected.classList.remove("active");

}
option4.onclick = function(){
  option4.classList.add("selected4");
  option3.classList.remove("selected3");
  option2.classList.remove("selected2");
  option1.classList.remove("selected1");
  option_selected.classList.remove("active");

}
let start_menu_input = document.querySelector(".startmenu input");
let search_menu = document.querySelector(".Search_box_container");
let icon2 = document.querySelector("#icon2");

icon2.onclick = function(){
  search_menu.classList.toggle("opened");
  startmenu.classList.remove("active");
  pinned_app_container.classList.remove("all_apps_state");
  used_apps.classList.remove("all_apps_state");
  search_bar.classList.remove("all_apps_state");
  start_menu_header.classList.remove("all_apps_state");
  backbutton.classList.remove("all_apps_state");
  recommended.classList.remove("all_apps_state"); 
  calendar.classList.remove("active")
  xd.classList.remove("active");
  all_apps_text.classList.remove("all_apps_state");
  all_apps_container.classList.remove("all_apps_state");
  Widgets_panel.classList.remove("opened")
}
start_menu_input.onclick = function(){
  startmenu.classList.remove("active");
  search_menu.classList.add("opened");
}


/*window.addEventListener('keydown', (event) => {
  if (event.key === 'w' /*&& event.key ) {
    event.preventDefault();
    startmenu.classList.toggle("active");
  alert('Hello World')
  }
})*/

            

/*battery % shower*/
const batterylevel = document.querySelector(".battery_percent")



navigator.getBattery().then(function(battery){
const level = battery.level;
const status = level * 13 +"%";
batterylevel.style.width = status;
//batterylevel.innerHTML = status;
//battery.innerHTML = status;
})
/*if (batterylevel.status  < "4" ){
 
  batterylevel.classList.add("low_percent");
}
})*/
const battery = document.querySelector(".battery span")



navigator.getBattery().then(function(battery1){
const level = battery1.level;
const status = level * 100 +"%";

battery.innerHTML = status;
})

 //Clock//
 

  
  
  //Clock//
  


  let lock_screen_not_selected = document.querySelector(".lock_screen");
  let time = document.querySelector(".time");
  let password_input = document.querySelector(".lock_screen_password_input");
  let password_input_arrow = document.querySelector(".arrow_left_inpass");
  let  user_circle_details = document.querySelector(".user_circle_details");
  let  user_name = document.querySelector(".user_mete_data_name");
  let  i_forgot_my_password = document.querySelector(".i_forgot_my_password");
  let  sign_in_options = document.querySelector(".sign_in_options");
  let sign_in_options_grid = document.querySelector(".sign_in_options_grid");
  let lock_screen_button = document.querySelector("#lock_the_screen");
  


  lock_screen_not_selected.onclick = function(){
    lock_screen_not_selected.classList.add("selected");
    time.classList.add("selected");
    password_input.classList.add("selected");
    password_input_arrow.classList.add("selected");
    user_circle_details.classList.add("selected");
    user_name.classList.add("selected")
    i_forgot_my_password.classList.add("selected");
    sign_in_options.classList.add("selected");
    sign_in_options_grid.classList.add("selected");
  }

  lock_screen_button.onclick = function(){
    lock_screen_not_selected.classList.add("active");
    lock_screen_not_selected.classList.remove("selected");
    time.classList.remove("selected");
    password_input.classList.remove("selected");
    password_input_arrow.classList.remove("selected");
    user_circle_details.classList.remove("selected");
    user_name.classList.remove("selected")
    i_forgot_my_password.classList.remove("selected");
    sign_in_options.classList.remove("selected");
    sign_in_options_grid.classList.remove("selected");

  }
 password_input.oninput = function() {

   window.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 ) {
        event.preventDefault();
        lock_screen_not_selected.classList.remove("active");
       
      }
    });
  }



 /* const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");*/

/*cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});*/

/*password_input.oninput = function() {

  window.addEventListener('keydown', (event) => {
     if (event.keyCode === 13 ) {
       event.preventDefault();
       lock_screen_not_selected.classList.remove("active");
       localStorage.setItem(" lock_screen_not_selected", "true");
     }
   });
 }

setTimeout(() => {
     if (!localStorage.getItem("lock_screen_not_selected", "true")) {
    lock_screen_not_selected.classList.add("active");
  }
}),0;*/
  
  
let abuot_window = document.querySelector(".about_window");
let ok_button = document.querySelector(".ok_button");



ok_button.onclick = function(){
  abuot_window.classList.add("close");
}


let todo_open_pinned = document.querySelector("#todo_open_pinned");
let excel_open_pinned = document.querySelector("#excel_open_pinned");
/*todo_open_pinned.addEventListener("click" ,Addnew);
excel_open_pinned.addEventListener("click" ,Addnew);
function  Addnew() {
  let newApp = document.createElement('li');
  newApp.classList.add('app');
  taskbar.appendChild(newApp);
  
}*/
todo_open_pinned.onclick = function () {
  let newApp = document.createElement('li');
  newApp.classList.add('app');
  taskbar.appendChild(newApp);
  
}
/*excel_open_pinned.onclick = function () {
  let newApp = document.createElement('li');
  newApp.classList.add('app');
  taskbar.appendChild(newApp);
  
}*/

//resizer 
/*var wrapper_resize = document.querySelector(".Window");*/
/*var header = document.querySelector(".Window-header SmallScreen");*/
/*resize = wrapper_resize.querySelector(".resize");
function onresize({sizeX: e, sizeY: r}) {
  let t = window.getComputedStyle(wrapper_resize)
    , a = parseInt(t.left)
    , o = parseInt(t.top);
  wrapper_resize.style.height = `${a + e}px`,
  wrapper_resize.style.width = `${o + r}px`
}*/
/*resize.addEventListener("mousedown", ()=>{
  resize.classList.add("active"),
 /*Window.classList.add("Ondrag_transition"),*/
  /*resize.addEventListener("mousemove", onresize)
}
),
document.addEventListener("mouseup", ()=>{
  resize.classList.remove("active"),
 /* Window.classList.remove("Ondrag_transition"),*/
 /* resize.removeEventListener("mousemove", onresize)
}
);*/





 
var wrapper = document.querySelector(".Window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
header = wrapper.querySelector(".Window-header");
function onDrag({movementX: e,  movementY: r}) {
  let t = window.getComputedStyle(wrapper)
    , a = parseInt(t.left)
    , o = parseInt(t.top);
  wrapper.style.left = `${a + e}px`,
  wrapper.style.top = `${o + r}px`
}
header.addEventListener("mousedown", ()=>{
  header.classList.add("active"),
 Window.classList.add("Ondrag_transition"),
 Window.classList.add("set_brd_rds"),
  header.addEventListener("mousemove", onDrag)
}
),
/*wrapper.addEventListener("mouseup", ()=>{
  header.classList.remove("active"),
  Window.classList.remove("Ondrag_transition"),
  header.removeEventListener("mousemove", onDrag)
}),*/

document.addEventListener("mouseup", ()=>{
  header.classList.remove("active"),
  Window.classList.remove("Ondrag_transition"),
  header.removeEventListener("mousemove", onDrag)
}
);

 
var wrapper_about = document.querySelector(".about_window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
header_about = wrapper_about.querySelector(".about_window_header");
function onDrag_about({movementX: e, movementY: r}) {
  let t = window.getComputedStyle(wrapper_about)
    , a = parseInt(t.left)
    , o = parseInt(t.top);
  wrapper_about.style.left = `${a + e}px`,
  wrapper_about.style.top = `${o + r}px`
}
header_about.addEventListener("mousedown", ()=>{
  header_about.classList.add("active"),
 wrapper_about.classList.add("Ondrag_transition"),
  header_about.addEventListener("mousemove", onDrag_about)
}
),
document.addEventListener("mouseup", ()=>{
  header_about.classList.remove("active"),
  wrapper_about.classList.remove("Ondrag_transition"),
  header_about.removeEventListener("mousemove", onDrag_about)
}
);
let about_trigger = document.querySelector("#about");

about_trigger.onclick = function() {
  abuot_window.classList.remove("close");
}
/*



const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("ne")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}*/
 
var resizer_window = document.querySelector(".Window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
resizer_ne = resizer_window.querySelector(".resizer_ne");
function onDrag_resize({movementY: e/*,movementX: r*/}) {
  let t = window.getComputedStyle(resizer_window)
    , a = parseInt(t.height)
    /*, o = parseInt(t.top);*/
    resizer_window.style.height = `${a + e}px`
    /*resizer_window.style.width = `${o + r}px`*/
}
resizer_ne.addEventListener("mousedown", ()=>{
  resizer_ne.classList.add("active"),
  Window.classList.add("onresize_trans");
  Window.classList.add("set_brd_rds");
  /*resizer_window.classList.add("Ondrag_transition"),*/
 resizer_ne.addEventListener("mousemove", onDrag_resize)
}
),

document.addEventListener("mouseup", ()=>{
resizer_ne.classList.remove("active"),
Window.classList.remove("onresize_trans");
/*resizer_window.classList.remove("Ondrag_transition"),*/
resizer_ne.removeEventListener("mousemove", onDrag_resize)
}
);



var resizer_window2 = document.querySelector(".Window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
resizer_w = resizer_window2.querySelector(".resizer_w");
function onDrag_resize_w({movementX: e/*,movementX: r*/}) {
  let t = window.getComputedStyle(resizer_window2)
    , a = parseInt(t.width)
    /*, o = parseInt(t.top);*/
    resizer_window2.style.width = `${a + e}px`
    /*resizer_window.style.width = `${o + r}px`*/
    
}
resizer_w.addEventListener("mousedown", ()=>{
  resizer_w.classList.add("active"),
  Window.classList.add("onresize_trans");
  Window.classList.add("set_brd_rds");
  /*resizer_window.classList.add("Ondrag_transition"),*/
 resizer_w.addEventListener("mousemove", onDrag_resize_w)
 Window.classList.add("onresize_width");
}
),

document.addEventListener("mouseup", ()=>{
resizer_w.classList.remove("active"),
Window.classList.remove("onresize_trans");
/*resizer_window.classList.remove("Ondrag_transition"),*/
resizer_w.removeEventListener("mousemove", onDrag_resize_w)
/*Window.classList.remove("onresize_width");*/
}
);
/*let about_trigger = document.querySelector("#about");

about_trigger.onclick = function() {
  abuot_window.classList.remove("close");
}*/

var resizer_window3 = document.querySelector(".Window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
resizer_s = resizer_window3.querySelector(".resizer_s");
function onDrag_resize_s({movementX: e/*,movementX: r*/}) {
  let t = window.getComputedStyle(resizer_window3)
    , a = parseInt(t.width)
  //  , o = parseInt(t.left);
   /* resizer_window3.style.width = `${ a + e}px`*/
   /* resizer_window3.style.left = `${o + e}px`*/
  //  const rect = resizer_window3.getBoundingClientRect();
 resizer_window3.style.width = `${ e + a}px`;
   //resizer_window3.style.width =  `${resizer_s.offsetX}px`;
  // resizer_window3.style.left = `${ e + o}px`;
   //resizer_window3.style.height = rect.height + (prevY - e.clientY) + "px";
   //el.style.width = rect.width + (prevX - e.clientX) + "px";
   prevX = resizer_window3.clientX;
      prevY = resizer_window3.clientY;

     
}
resizer_s.addEventListener("mousedown", ()=>{
  resizer_s.classList.add("active"),
  Window.classList.add("onresize_trans");
  Window.classList.add("set_brd_rds");
  /*resizer_window.classList.add("Ondrag_transition"),*/
 resizer_s.addEventListener("mousemove", onDrag_resize_s)
}
),

document.addEventListener("mouseup", ()=>{
resizer_s.classList.remove("active"),
Window.classList.remove("onresize_trans");
/*resizer_window.classList.remove("Ondrag_transition"),*/
resizer_s.removeEventListener("mousemove", onDrag_resize_s)
}
);






//set local storage


let settings_column5 = document.querySelector(".settings-column5");
let theme = document.querySelector("#theme_button");
let localData = localStorage.getItem("theme");

if(localData == "light"){
  theme.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/brightness.png";
  document.body.classList.remove("dark-theme");
}
else if(localData =="dark"){
 theme.src = "https://win11.blueedge.me/img/icon/ui/moon.png";
  document.body.classList.add("dark-theme");
}

settings_column5.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    theme.src = " https://win11.blueedge.me/img/icon/ui/moon.png";
    localStorage.setItem("theme", "dark");
  }else{
    theme.src = "https://raw.githubusercontent.com/cupofcoffebruh/Binbows11-copy/main/Ui_icons/brightness.png";
    localStorage.setItem("theme", "light");
  }
}

var resizer_window4 = document.querySelector(".Window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
resizer_sw = resizer_window4.querySelector(".resizer_sw");
function onDrag_resize_sw({movementX: e,movementY: r}) {
  let t = window.getComputedStyle(resizer_window4)
    , a = parseInt(t.width)
    , o = parseInt(t.height);
    resizer_window4.style.width = `${a + e}px`
    resizer_window4.style.height = `${o + r}px`
    resizer_window4.style.width = `${a + e }px`
} 
resizer_sw.addEventListener("mousedown", ()=>{
  resizer_sw.classList.add("active"),
  Window.classList.add("onresize_trans");
  Window.classList.add("set_brd_rds");
  /*resizer_window.classList.add("Ondrag_transition"),*/
 resizer_sw.addEventListener("mousemove", onDrag_resize_sw)
}
),

document.addEventListener("mouseup", ()=>{
resizer_sw.classList.remove("active"),
Window.classList.remove("onresize_trans");

/*resizer_window.classList.remove("Ondrag_transition"),*/
resizer_sw.removeEventListener("mousemove", onDrag_resize_sw)

}
);


var resizer_window5 = document.querySelector(".Window");
/*var header = document.querySelector(".Window-header SmallScreen");*/
resizer_top = resizer_window5.querySelector(".resizer_top");
function onDrag_resize_top({/*movementX: e,*/movementY: r}) {
  let t = window.getComputedStyle(resizer_window4)
    , a = parseInt(t.top)
    , o = parseInt(t.bottom);
    resizer_window5.style.height =`${r + a}px`
    resizer_window5.style.bottom =`${r + o}px`
   //resizer_window5.style.height =  (r - o) + "px";
    /*resizer_window5.style.bottom = `${r + a}px`*/
    //+ (prevX - e.clientX) + "px"
} 
resizer_top.addEventListener("mousedown", ()=>{
  resizer_top.classList.add("active"),
  Window.classList.add("onresize_trans");
  /*resizer_window.classList.add("Ondrag_transition"),*/
  Window.classList.add("set_brd_rds");
 resizer_top.addEventListener("mousemove", onDrag_resize_top)
}
),

document.addEventListener("mouseup", ()=>{
resizer_top.classList.remove("active"),
Window.classList.remove("onresize_trans");
/*resizer_window.classList.remove("Ondrag_transition"),*/
resizer_top.removeEventListener("mousemove", onDrag_resize_top)

}
);

function onhover() {
  let snapbox = document.querySelector(".multi_task_box");
  snapbox.classList.toggle("full");
}
