using System;
namespace program
{

    class Hello
    {

        static void Main()
        {
            Console.WriteLine("What is Your Name");
            string name = Console.ReadLine();
            Console.WriteLine("What is Your Age");
            int age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("What is Your CGP");
            double cgp = Convert.ToDouble(Console.ReadLine());


            Console.WriteLine("Welcome " + name);
            if (age >= 18)
            {
                Console.WriteLine("You are an Adult");
            }
            else
            {
                Console.WriteLine("You are not Adult");
            }
            Console.WriteLine("Your CGP is " + cgp);


            
        }
    }
}