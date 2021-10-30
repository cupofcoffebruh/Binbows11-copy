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
      }
      //startmenu//
      
      let startmenu = document.querySelector(".startmenu");
      let Windowsomething = document.querySelector(".Window");
      ;
      
      
      
      icon.onclick = function(){
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


      }
      Windowsomething.onclick = function(){
        startmenu.classList.remove("active");
      }
     

      //Widgets panel//
      let Widgets_panel = document.querySelector(".widgets-container");
      let icon3 = document.querySelector("#icon3")
      ;
      
      
      
      icon3.onclick = function(){
        Widgets_panel.classList.toggle("opened")
        
      }
      //Active App indicator//
      
      
      
      //QuickSettings//
      let QuickSettings = document.querySelector(".Quick_Settings");
      let  xd  = document.querySelector(".Quick-Settings-Container");
      ;
      
      
      
      QuickSettings.onclick = function(){
        xd.classList.toggle("active")
      
      }
      //Quick Acces//
      
      let element = document.querySelector(".settings-column");
      ;
      
      
      
      element.onclick = function(){
        element.classList.toggle("active")
        
      
      }
      
      
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
      
      }
      
      
      
      
      
      let idk3 = document.querySelector(".settings-column3");
      ;
      
      
      
      idk3.onclick = function(){
        idk3.classList.toggle("active")
        
      
      }
      
      let idk4 = document.querySelector(".settings-column4");
      ;
      
      
      
      idk4.onclick = function(){
        idk4.classList.toggle("active")
        
      
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
      ;
      
      
      
      square.onclick = function(){
        Window_header.classList.toggle("SmallScreen");
        Window.classList.toggle("SmallScreen");
        xdk.classList.toggle("SmallScreen");
       Numbergrid.classList.toggle("SmallScreen");
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
      } 




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
        search_bar.classList.toggle("all_apps_state");
        start_menu_header.classList.toggle("all_apps_state");
        backbutton.classList.toggle("all_apps_state");
        recommended.classList.toggle("all_apps_state"); 
        all_apps_text.classList.toggle("all_apps_state");
        all_apps_container.classList.toggle("all_apps_state");
      } 

      backbutton.onclick = function(){
        pinned_app_container.classList.toggle("all_apps_state");
        used_apps.classList.toggle("all_apps_state");
        search_bar.classList.toggle("all_apps_state");
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
      ;
      
      
      
      totaskbar.onclick = function(){
      Window.classList.toggle("Active");
        line.classList.toggle("notactive");
        line.classList.add("active");
        
      } 
      
      icon7.onclick = function(){
        line.classList.toggle("notactive");
        line.classList.add("active");
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
      const BrightnessOverlay = document.querySelector(".Brightness-Overlay");
      const progressbar = document.querySelector(".progressbar");
      const slideValue = document.querySelector(".sliderValue span");
            const inputSlider = document.querySelector(".field input");
            inputSlider.oninput = (()=>{
              let value = inputSlider.value;
              slideValue.textContent = value;
              slideValue.style.left = (value/1.5) + "%";
              progressbar.style.width = (value/1.4) + "%";
              BrightnessOverlay.style.opacity = (value/1) + "%";
              slideValue.classList.add("show");
            });
            inputSlider.onblur = (()=>{
              slideValue.classList.remove("show");
            });
      
      
            const progressbar1 = document.querySelector(".progressbar1");
      const slideValue1 = document.querySelector(".sliderValue1 span");
      const Value = document.querySelector(".sliderValue1");
            const inputSlider1 = document.querySelector(".field1 input");
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
} 

/*toleft33%*/
let column_left2 = document.querySelector(".column-left2");
let window_multitask4 = document.querySelector(".Window");

;



column_left2.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
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
} 

/*tocenter33*/
let column_left2_center_item = document.querySelector(".column-left2_center_item");
let window_multitask5 = document.querySelector(".Window");

;



column_left2_center_item.onclick = function(){
  show_number.classList.add("addright_top");
  history.classList.add("addright_top");
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
} 

/*toleft33*/
let column_right2 = document.querySelector(".column-right2");
let window_multitask6 = document.querySelector(".Window");

;



column_right2.onclick = function(){
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
} 



/*tri position columns*/
let column_left3 = document.querySelector(".column-left3");
let window_multitask7 = document.querySelector(".Window");

;



column_left3.onclick = function(){
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

} 
/*left4 top*/
let column_left4_top = document.querySelector(".column-left4-top");
let window_multitask10 = document.querySelector(".Window");

;



column_left4_top.onclick = function(){
  window_multitask10.classList.add("addleft_top");
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
  window_multitask12.classList.remove("addsomething");
  window_multitask13.classList.remove("left-bottom");
  window_multitask14.classList.remove("right4-bottom");
  window_multitask15.classList.remove("asdw");
  window_multitask16.classList.remove("center50");
  window_multitask17.classList.remove("right25");
  Window.classList.remove("SmallScreen");
} 


/*top right*/

let column_left4_bottom = document.querySelector(".column-left4-bottom");
let window_multitask12 = document.querySelector(".Window");

;



column_left4_bottom.onclick = function(){
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
} 


/*bottom_left*/
let column_right4_top = document.querySelector(".column-right4-top");
let window_multitask13 = document.querySelector(".Window");

;



column_right4_top.onclick = function(){
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
} 





let column_right4_bottom = document.querySelector(".column-right4-bottom");
let window_multitask14 = document.querySelector(".Window");

;



column_right4_bottom.onclick = function(){
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
} 


let column_left5 = document.querySelector(".column-left5");
let window_multitask15 = document.querySelector(".Window");
let number_vals1 = document.querySelector(".Number-vals");
;



column_left5.onclick = function(){
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
} 



let column_left5_center_item = document.querySelector(".column-left5_center_item");
let window_multitask16 = document.querySelector(".Window");
;



column_left5_center_item.onclick = function(){
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
}
let column_right5 = document.querySelector(".column-right5");
let window_multitask17 = document.querySelector(".Window");
;



column_right5.onclick = function(){
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
  all_apps_text.classList.remove("all_apps_state");
  all_apps_container.classList.remove("all_apps_state");

}
start_menu_input.onclick = function(){
  startmenu.classList.remove("active");
  search_menu.classList.add("opened");
}


window.addEventListener('keydown', (event) => {
  if (event.key === 'w' /*&& event.key*/ ) {
    event.preventDefault();
    startmenu.classList.toggle("active");
  /* alert('Hello World')*/
  }
})

/*battery % shower*/


const  batterylevel = document.querySelector(".battery_percent");


navigator.getBattery().then(function(battery){
const level = battery.level;
const status = level * 10 +"%";
batterylevel.style.width = status;
batterylevel.innerHTML = status;
})
