using System;
namespace program
{

    class Hello
    {

        static void Main()
        {
            try
            {
                Console.WriteLine("Enter First Number");
                int first = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Second Number");
                int second = Convert.ToInt32(Console.ReadLine());
                int ans;
                ans = first / second;
                Console.WriteLine(ans);
            }
            catch (DivideByZeroException ex)
            {
                System.Console.WriteLine("Can't Divide by Zero");

            }   
            catch (FormatException ex)
            {
                System.Console.WriteLine("Please Enter Number");
            }
            finally
            {
                System.Console.WriteLine("Enjoy");
                
            }         
        }
    }
}