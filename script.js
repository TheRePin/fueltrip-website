.app{
  position:relative;
  z-index:10;
}
*{
  box-sizing:border-box;
  font-family:"Prompt",Arial Black,sans-serif;
}

body{
  margin:0;
  background:#f5f5f5;
  color:#111;
}

.hidden{display:none}

/*-- SIDEBAR --*/
.sidebar{
  position:fixed;
  left:0px;
  top:0px;
  transform:translateY(-50%);
  display:flex;
  flex-direction:column;
  gap:12px;

  max-height:calc(100vh - 40px);
  overflow-y:auto;
  padding:8px;
  scrollbar-width:thin;
  scrollbar-color:#ffd6e7 transparent;
}

body.sidebar-collapsed .sidebar-wrap{
  left:-110px;
}

body.sidebar-collapsed .sidebar-toggle{
  left:6px;
  transform:translateY(-50%) rotate(180deg);
}

.sidebar::-webkit-scrollbar{
  width:10px;
}

.sidebar::-webkit-scrollbar-track{
  background:transparent;
}

.sidebar::-webkit-scrollbar-thumb{
  background:linear-gradient(
    180deg,
    #ffd6e7,
    #d6f0ff,
    #e4ffd6
  );
  border-radius:20px;
  border:3px solid white;
}

.sidebar::-webkit-scrollbar-thumb:hover{
  background:linear-gradient(
    180deg,
    #ffb7d2,
    #bfe6ff,
    #ccffb7
  );
}

.sidebar-wrap{
  position:fixed;
  left:0;
  top:50%;
  transform:translateY(-50%);
  transition:left .45s cubic-bezier(.2,.8,.2,1);
  z-index:500;
}

.sidebar-toggle{
  position:fixed;
  left:110px;
  top:50%;
  transform:translateY(-50%);
  width:30px;
  height:72px;
  border:none;
  border-radius:0 16px 16px 0;
  background:rgba(255,255,255,.85);
  backdrop-filter:blur(8px);
  cursor:pointer;
  z-index:1000;
  transition:.35s cubic-bezier(.2,.8,.2,1);
  box-shadow:0 6px 20px rgba(0,0,0,.18);
}

.sidebar button{
  font-size:28px;
  padding:14px;
  border-radius:16px;
  cursor:pointer;
  background:white;
}

.main{
  margin-left:90px;
  transition:.35s;
}

.sidebar.collapsed ~ .main{
  margin-left:0;
}

.menu-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

button:active{
  transform:scale(.94);
}

.menu-btn{
  width:80px;
  height:80px;  
  padding:10px;
  background:white;
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.menu-btn img{
  width:80px; 
  height:80px;
  object-fit:contain; 
}

.menu-btn{
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
}


/*-- MODAL --*/
.modal{
  position:fixed;
  top:50%;
  left:50vw;
  transform:translate(-50%,-50%);

  width:min(92vw,420px);
  max-height:85vh;
  overflow:auto;

  background:#fff;
  border-radius:22px;
  padding:22px;

  box-shadow:0 30px 80px rgba(0,0,0,.45);

  display:none;
  z-index:20000;
}

.modal.show{
  display:block;
}

input,textarea,button{
  width:100%;
  margin:6px 0;
  padding:10px;
  border-radius:14px;
}

/*-- OVERLAY --*/
#overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.5);
  display:none;
  z-index:5000;
}

#overlay.show{
  display:block;
}

/*-- FLASHCARD --*/

.fcCardRow{
  display:flex;
  align-items:center;
  gap:8px;
}

.fcCardRow input{
  flex:1;
  width:auto;      
  font-size:18px;
  padding:12px 14px;
}

.fcCardRow button{
  width:auto;       
  flex:0 0 auto;
  font-size:13px;
  padding:6px 8px;
  margin:0;
  opacity:.6;
}

.fcCardRow button:hover{
  opacity:1;
}

.fcCardRow input::placeholder{
  font-size:14px;
}

textarea{height:200px}

.row{
  display:flex;
  gap:8px;
}

.big{
  font-size:36px;
  text-align:center;
  margin:10px 0;
}

.calc{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:6px;
}

#miniZone{
  position:fixed;
  right:20px;
  bottom:20px;
  display:flex;
  flex-direction:column;
  gap:12px;
  z-index:15000;
}

.mini{
  background:rgba(255,255,255,0.95);
  padding:12px 18px;
  border-radius:16px;
  box-shadow:0 10px 30px rgba(0,0,0,.2);
  font-size:14px;
  font-weight:600;
  min-width:120px;
}

.card-box{
  border:1px solid #ddd;
  padding:10px;
  border-radius:14px;
  margin-bottom:8px;
}

.card-box input{
  margin-bottom:6px;
}

.card-box button{
  background:#eee;
}

/*-- FLASHCARD --*/

#fcCatList div{
  display:flex;
  gap:6px;
  margin-bottom:6px;
}

#fcCatList button{
  flex:1;
}

/*-- PREVIEW FLIP --*/
.fc-preview-wrap{
  perspective:1000px;
  margin:16px 0;
}

.fc-preview-card{
  position:relative;
  height:200px;
  transform-style:preserve-3d;
  transition:transform .6s ease;
  cursor:pointer;
}

.fc-preview-card.flipped{
  transform:rotateY(180deg);
}

.fc-front,
.fc-back{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  font-size:24px;
  border:2px solid #ccc;
  border-radius:18px;
  background:white;
  backface-visibility:hidden;
}

.fc-back{
  transform:rotateY(180deg);
}

/*-- EDITOR --*/
.fc-editor{
  max-height:50vh;
  overflow-y:auto;
  margin-top:10px;
}

.fcCardRow input{
  flex:1;
  font-size:18px;
  line-height:1.5;
  padding:12px 14px;
  border-radius:10px;
}

.fcCardRow button{
  font-size:12px;
  padding:4px 6px;
  border-radius:8px;
  opacity:.6;
}

.fcCardRow button:hover{
  opacity:1;
}

.fcCatName{
  font-size:18px;
  font-weight:600;
}

/*-- VIDEO BACKGROUND --*/
#background .row{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:8px;
}

.background button{
  white-space:nowrap;
}

#bgVideoWrap{
  position:fixed;
  inset:0;
  z-index:-10;
  overflow:hidden;
}

#bgVideo{
  width:100%;
  height:100%;
  object-fit:cover;
}

.app{
  position:relative;
  z-index:5;
}

/*-- BG ACTIVE BUTTON --*/
#background button.active{
  outline:2px solid #000;
  background:#eee;
}

#bgVideo { 
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  object-fit: cover; 
  z-index: -1; 
}

@media (max-width:768px){
  .sidebar-wrap{
    left:0;
    top:50%;
    transform:translateY(-50%);
  }

  .sidebar{
    flex-direction:column;
    max-height:80vh;
  }

  .menu-btn img{
    width:60px;
    height:60px;
  }

  .modal{
    width:95vw;
  }
}

.sound-btn{
  position:fixed;
  top:18px;
  right:18px;
  width:48px;
  height:48px;
  border-radius:50%;
  border:none;
  background:#fff;
  box-shadow:0 8px 25px rgba(0,0,0,.2);
  cursor:pointer;
  z-index:25000;
}

.icon-slot{
  width:28px;
  height:28px;
  background-size:contain;
  background-repeat:no-repeat;
  background-position:center;
}

#overlay{
  pointer-events:auto;
}

.modal{
  pointer-events:auto;
}

.icon-slot{
  width:28px;
  height:28px;
  margin:auto;
  background-size:contain;
  background-position:center;
  background-repeat:no-repeat;
}

@media (max-width:768px){

  .sidebar{
    width:70px;
  }

  .main{
    margin-left:70px;
  }

  .sidebar.collapsed{
    left:-70px;
  }

}