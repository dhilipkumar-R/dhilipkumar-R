//ref

//ref is used to state that the parameter passed may be modified by the method.
//Both the ref and in require the parameter to have been initialized before being passed to a method

year = 0;
public add(ref string year){
year = 2017;
}


//in

//in is used to state that the parameter passed cannot be modified by the method.
//Both the ref and in require the parameter to have been initialized before being passed to a method

year = 0;
public add(in string year){

}
//out 

//out is used to state that the parameter passed must be modified by the method.
//Both the ref and in require the parameter to have been initialized before being passed to a method


public add(out string year){
year = 2017;
}

