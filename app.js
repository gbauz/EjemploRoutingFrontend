const express=require("express");
const app=express();
const path=require("path");
const PORT=process.env.PORT || 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

const indexRouter=require('./routes/index');
app.use('/',indexRouter);

app.listen(PORT,()=>{
    console.log(`estas conectado al puerto ${PORT}`);
});