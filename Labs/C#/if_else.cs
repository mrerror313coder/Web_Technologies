using System;
namespace program
{

    class Hello
    {

        static void Main()
        {
            Console.WriteLine("What is Your Fav Day");
            string day = Console.ReadLine();
            day = day.ToLower();

            if (day == "monday")
            {
                Console.WriteLine("Your Faviourt Day is Monday");
                
            }
            if (day == "tuesday")
            {
                Console.WriteLine("Your Faviourt Day is Teusday");
                
            }
            if (day == "wednesday")
            {
                Console.WriteLine("Your Faviourt Day is Wednesday");
                
            }

            if (day == "thirsday")
            {
                Console.WriteLine("Your Faviourt Day is Thirsday");
                
            }
            if (day == "friday")
            {
                Console.WriteLine("Your Faviourt Day is Friday");
                
            }
            if (day == "Saturday")
            {
                Console.WriteLine("Your Faviourt Day is Saturday");
                
            }
            

            
        }
    }
}