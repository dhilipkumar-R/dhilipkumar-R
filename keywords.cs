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

//readonly 
//ReadOnly is a runtime constant.
//In readonly fields, we can assign values in declaration and in the constructor part.
//It can be used with static modifiers.

class GFG {
 
    // readonly variables
    public readonly int myvar1;
    public readonly int myvar2;
 
    // Values of the readonly
    // variables are assigned
    // Using constructor
    public GFG(int b, int c)
    {
 
        myvar1 = b;
        myvar2 = c;
        Console.WriteLine("Display value of myvar1 {0}, "+
                        "and myvar2 {1}", myvar1, myvar2);
    }
 
    // Main method
    static public void Main()
    {
        GFG obj1 = new GFG(100, 200);
    }
}

//const
//In const fields, we can only assign values in declaration part.
//	It cannot be used with static modifiers.
//	Const is a compile time constant.
