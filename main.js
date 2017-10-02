function calc(){
var num1=parseInt($('#f').val());
var num2=parseInt($('#s').val());
var oper=$('#operators').val();
 //alert(oper);
 calculator(num1,num2,oper);
}
function calculator(num1,num2,oper){
 if (isNaN(parseInt(num1))||isNaN(parseInt(num2))){
    alert("please enter only numbers");
    
    throw Error('The given arguments is not a number');

 }
 if(oper == '+'){
    
     $("#output").val(num1+num2);
     return num1+num2;
    
 }
 else if(oper == '-'){
    $("#output").val(num1-num2);
    return num1-num2;
    }
else if(oper == '*'){ 
    $("#output").val(num1*num2);
    return num1*num2;
    }
else if(oper == '/'){
    $("#output").val(num1/num2);
    return num1/num2;
    }
else
    alert("Invalid");
    return "Invalid"
}