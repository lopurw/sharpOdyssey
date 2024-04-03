import React, { useState} from 'react';
import classes from '../quiz/questions.module.css';
import Tooltip from '@mui/material/Tooltip';

import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { level1, level2, level3, level4, level5, level6 } from '../questions_levels'; // Путь к вашему файлу questions_levels.js
import { useParams } from 'react-router-dom';
export default function Questions() {
    
    const codeSnippet6=`<section>
    <h2>Обработка исключений: try-catch блок</h2>
    <p>В блоке try размещается код, который может привести к исключению. Если исключение происходит, выполнение кода в блоке try прерывается, и управление передается в блок catch, где можно обработать исключение.</p>
    <pre><code>
      try
      {
          // Блок кода, где может произойти исключение
          int result = 10 / 0; // Попытка деления на ноль
      }
      catch (Exception ex)
      {
          // Блок кода, который выполняется при возникновении 
                                                исключения
          Console.WriteLine("An error occurred: " 
          + ex.Message);
      }
    </code></pre>
  </section>
  
  <section>
    <h2>Обработка исключений: finally блок</h2>
    <p>Блок finally выполняется в любом случае, независимо от того, произошло ли исключение или нет. Он используется для освобождения ресурсов или выполнения завершающих действий.</p>
    <pre><code>
      try
      {
          // Блок кода, где может произойти исключение
      }
      catch (Exception ex)
      {
          // Блок кода, который выполняется при возникновении 
                                                исключения
      }
      finally
      {
          // Блок кода, который выполняется в любом случае
          Console.WriteLine("Finally block is executed.");
      }
    </code></pre>
  </section>
  
  <section>
    <h2>Пользовательские исключения</h2>
    <p>Пользовательские исключения - это специальные классы, которые наследуются от базового класса Exception и используются для обработки специфических ситуаций в приложении.</p>
    <pre><code>
      class MyCustomException : Exception
      {
          public MyCustomException(string message) : base
                                                    (message)
          {
          }
      }
  
      class Program
      {
          static void Main(string[] args)
          {
              try
              {
                  throw new MyCustomException("This is a custom 
                  exception.");
              }
              catch (MyCustomException ex)
              {
                  Console.WriteLine("Custom exception caught: " 
                  + ex.Message);
              }
          }
      }
    </code></pre>
  </section>
  
  <section>
    <h2>Лучшие практики программирования</h2>
    <h3>Отладка</h3>
    <p>Используйте отладчик для поиска и устранения ошибок в коде. Установите точки останова (breakpoints), следите за значениями переменных и используйте инструменты отладки для анализа выполнения программы.</p>
  
    <h3>Комментирование кода</h3>
    <p>Пишите понятные и информативные комментарии к коду. Комментарии должны объяснять, что делает код, особенности его реализации и любые другие важные детали.</p>
  
    <h3>Структурирование проекта</h3>
    <p>Соблюдайте правила структурирования проекта. Разделяйте код на логические модули и используйте пространства имен для организации классов. Это поможет улучшить читаемость, поддерживаемость и масштабируемость вашего кода.</p>
  </section>`
    const codeSnippet5=`<section>
    <h2>Классы и объекты</h2>
    <p>Класс - это шаблон или формальное описание объекта, определяющее его свойства (поля) и действия (методы). Объект - это конкретный экземпляр класса, который имеет свои собственные уникальные значения свойств.</p>
    <pre><code>
      class Car
      {
          public string Model;
          public string Color;
  
          public void Start()
          {
              Console.WriteLine("The car is started.");
          }
      }
  
      Car myCar = new Car();
      myCar.Model = "Toyota";
      myCar.Color = "Red";
      myCar.Start();
    </code></pre>
  </section>
  
  <section>
    <h2>Абстракция</h2>
    <p>Абстракция - это процесс выделения общих характеристик объекта, игнорируя детали реализации. В ООП абстракция позволяет скрывать сложные детали и предоставлять простой интерфейс для взаимодействия с объектами.</p>
    <pre><code>
      abstract class Shape
      {
          public abstract double Area();
      }
  
      class Circle : Shape
      {
          public double Radius;
  
          public override double Area()
          {
              return Math.PI * Radius * Radius;
          }
      }
    </code></pre>
  </section>
  
  <section>
    <h2>Инкапсуляция</h2>
    <p>Инкапсуляция - это концепция, которая скрывает детали реализации объекта и предоставляет только интерфейс для взаимодействия с ним. В ООП инкапсуляция достигается с помощью доступа к полям и методам объекта.</p>
    <pre><code>
      class BankAccount
      {
          private decimal balance;
  
          public decimal Balance
          {
              get { return balance; }
              set { balance = value; }
          }
  
          public void Deposit(decimal amount)
          {
              balance += amount;
          }
  
          public void Withdraw(decimal amount)
          {
              if (balance >= amount)
                  balance -= amount;
              else
                  Console.WriteLine("Insufficient funds.");
          }
      }
    </code></pre>
  </section>
  
  <section>
    <h2>Наследование и полиморфизм</h2>
    <h3>Наследование</h3>
    <p>Наследование - это механизм ООП, который позволяет создавать новые классы на основе существующих. При наследовании новый класс (подкласс) получает свойства и методы своего родительского класса (суперкласса).</p>
    <pre><code>
      class Animal
      {
          public void Eat()
          {
              Console.WriteLine("Animal is eating.");
          }
      }
  
      class Dog : Animal
      {
          public void Bark()
          {
              Console.WriteLine("Dog is barking.");
          }
      }
    </code></pre>
  
    <h3>Полиморфизм</h3>
    <p>Полиморфизм - это способность объекта использовать методы разных классов в зависимости от контекста. Полиморфизм позволяет использовать одно и то же имя метода для различных классов.</p>
    <pre><code>
      class Animal
      {
          public virtual void Sound()
          {
              Console.WriteLine("Animal makes a sound.");
          }
      }
  
      class Dog : Animal
      {
          public override void Sound()
          {
              Console.WriteLine("Dog barks.");
          }
      }
  
      class Cat : Animal
      {
          public override void Sound()
          {
              Console.WriteLine("Cat meows.");
          }
      }
    </code></pre>
  </section>
  
  <section>
    <h2>Интерфейсы и абстрактные классы</h2>
    <h3>Интерфейсы</h3>
    <p>Интерфейс - это контракт, который определяет набор методов и свойств, которые класс должен реализовать. Интерфейсы позволяют реализовывать множественное наследование и обеспечивают гибкость при проектировании.</p>
    <pre><code>
      interface IShape
      {
          double Area();
      }
  
      class Circle : IShape
      {
          public double Radius;
  
          public double Area()
          {
              return Math.PI * Radius * Radius;
          }
      }
    </code></pre>
  
    <h3>Абстрактные классы</h3>
    <p>Абстрактный класс - это класс, который не может быть инстанциирован, а может содержать как реализованные, так и нереализованные (абстрактные) методы. Он служит базовым классом для других классов.</p>
    <pre><code>
      abstract class Shape
      {
          public abstract double Area();
      }
  
      class Circle : Shape
      {
          public double Radius;
  
          public override double Area()
          {
              return Math.PI * Radius * Radius;
          }
      }
    </code></pre>
  </section>`
    const codeSnippet4=`<section>
    <h2>Объявление и вызов методов: Параметры, возвращаемые значения</h2>
    <p>Методы представляют собой блоки кода, которые выполняют определенные задачи. Они могут принимать входные данные (параметры), выполнять операции над ними и возвращать результаты.</p>
    
    <h3>Объявление метода:</h3>
    <pre><code>
      // Метод без параметров и возвращаемого значения
      void PrintHello()
      {
          Console.WriteLine("Hello!");
      }
  
      // Метод с параметрами и возвращаемым значением
      int Add(int a, int b)
      {
          return a + b;
      }
    </code></pre>
    
    <p>В первом примере метод PrintHello не принимает параметры и не возвращает значения. Он просто выводит на консоль приветствие "Hello!". Во втором примере метод Add принимает два параметра типа int и возвращает их сумму.</p>
    
    <h3>Вызов метода:</h3>
    <pre><code>
      PrintHello(); // Вызов метода без параметров и 
      возвращаемого значения
  
      int sum = Add(3, 5); // Вызов метода с параметрами и 
      возвращаемым значением
    </code></pre>
    
    <p>Метод PrintHello() вызывается без аргументов, поскольку он не принимает параметры. Метод Add(3, 5) вызывается с двумя аргументами (числами 3 и 5), которые передаются методу для выполнения операции сложения.</p>
  </section>
  
  <section>
    <h2>Рекурсия: Основы и примеры</h2>
    <p>Рекурсия - это процесс, при котором метод вызывает сам себя. Она часто используется для решения задач, которые могут быть разбиты на более мелкие подзадачи. Рекурсивные методы включают базовый случай, который определяет конечное условие цикла.</p>
    
    <h3>Пример рекурсивного метода: Факториал</h3>
    <pre><code>
      int Factorial(int n)
      {
          if (n == 0)
              return 1; // Базовый случай: факториал 0 равен 1
          else
              return n * Factorial(n - 1); // Рекурсивный вызов 
                                                метода
      }
    </code></pre>
    
    <p>В этом примере метод Factorial рекурсивно вызывает сам себя, пока n не достигнет 0. Когда n равно 0, возвращается 1 (базовый случай), в противном случае возвращается произведение n на факториал (n - 1).</p>
  </section>
  
  <section>
    <h2>Область видимости переменных: Локальные и глобальные переменные, модификаторы доступа</h2>
    
    <h3>Локальные переменные:</h3>
    <p>Локальные переменные объявляются внутри метода и доступны только внутри этого метода.</p>
    <pre><code>
      void PrintNumber()
      {
          int number = 10; // Локальная переменная
          Console.WriteLine(number);
      }
    </code></pre>
    
    <p>Переменная number является локальной для метода PrintNumber и не может быть использована за его пределами.</p>
    
    <h3>Глобальные переменные:</h3>
    <p>Глобальные переменные объявляются вне методов и доступны для всех методов в классе. Они должны использоваться с осторожностью из-за потенциальных проблем с читаемостью и поддержкой кода.</p>
    <pre><code>
      class Program
      {
          int globalVariable = 20; // Глобальная переменная
  
          void PrintGlobalVariable()
          {
              Console.WriteLine(globalVariable);
          }
      }
    </code></pre>
    
    <p>Переменная globalVariable является глобальной для класса Program и может быть использована внутри всех его методов.</p>
    
    <h3>Модификаторы доступа:</h3>
    <p>Модификаторы доступа управляют доступом к переменным и методам из других частей программы.</p>
    <ul>
      <li><strong>public:</strong> Публичные переменные и методы доступны из любой части программы.</li>
      <li><strong>private:</strong> Приватные переменные и методы доступны только внутри того же класса.</li>
      <li><strong>protected:</strong> Защищенные переменные и методы доступны только внутри того же класса и его наследников.</li>
      <li><strong>internal:</strong> Переменные и методы с модификатором internal доступны только внутри сборки.</li>
    </ul>
    <pre><code>
      public class MyClass
      {
          private int privateVariable; // Приватная переменная
          public int publicVariable; // Публичная переменная
      }
    </code></pre>
    
    <p>Модификаторы доступа позволяют контролировать доступ к переменным и методам, что способствует безопасности и обеспечивает чистоту кода.</p>
  </section>`
    const codeSnippet3 = `<section>
    <h2>Массивы:</h2>
    <p>Массивы представляют собой упорядоченные коллекции элементов одного типа данных. Они предоставляют удобный способ хранения множества значений одного типа.</p>
    
    <h3>Объявление и инициализация массивов:</h3>
    <pre><code>
    // Одномерный массив целых чисел с 5 элементами
    int[] numbers = new int[5];
    // Инициализация элементов массива при объявлении
    int[] numbers = {1, 2, 3, 4, 5};
    
    // Двумерный массив целых чисел 3x3
    int[,] matrix = new int[3, 3];
    // Инициализация двумерного массива
    int[,] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
    </code></pre>
    
    <h3>Работа с элементами массива:</h3>
    <pre><code>
    int[] numbers = {1, 2, 3, 4, 5};
    // Доступ к элементам массива по индексу
    int firstNumber = numbers[0]; // 1
    int lastNumber = numbers[numbers.Length - 1]; 
    // 5 (длина массива - 1)
    
    // Изменение элемента массива
    numbers[2] = 10; // Замена третьего элемента на 10
    </code></pre>
    
    <h3>Методы массивов:</h3>
    <p>В C# массивы предоставляют ряд встроенных методов для удобного выполнения различных операций с массивами.</p>
    <ol>
      <li>
        <h4>Length:</h4>
        <pre><code>
    int[] numbers = {1, 2, 3, 4, 5};
    int length = numbers.Length; // length равен 5
        </code></pre>
      </li>
      
      <li>
        <h4>CopyTo:</h4>
        <pre><code>
    int[] source = {1, 2, 3, 4, 5};
    int[] target = new int[5];
    source.CopyTo(target, 0); // Копирование элементов из source в target, 
                                начиная с индекса 0
        </code></pre>
      </li>
      
      <li>
        <h4>IndexOf:</h4>
        <pre><code>
    int[] numbers = {10, 20, 30, 40, 50};
    int index = Array.IndexOf(numbers, 30); // index равен 2
        </code></pre>
      </li>
      
      <li>
        <h4>Reverse:</h4>
        <pre><code>
    int[] numbers = {1, 2, 3, 4, 5};
    Array.Reverse(numbers); // Теперь numbers содержит 
                                {5, 4, 3, 2, 1}
        </code></pre>
      </li>
      
      <li>
        <h4>Sort:</h4>
        <pre><code>
    int[] numbers = {5, 2, 4, 1, 3};
    Array.Sort(numbers); // Теперь numbers содержит
                             {1, 2, 3, 4, 5}
        </code></pre>
      </li>
    </ol>
  </section>
  
  <section>
    <h2>Коллекции:</h2>
    <p>Коллекции представляют собой классы, которые предоставляют гибкое хранение и управление данными. Некоторые из наиболее популярных коллекций в C# включают List, Dictionary и HashSet.</p>
    
    <h3>List:</h3>
    <pre><code>
    // Создание и инициализация списка целых чисел
    List<int> numbers = new List<int>();
    numbers.Add(1);
    numbers.Add(2);
    numbers.Add(3);
    
    // Доступ к элементам списка
    int firstNumber = numbers[0]; // 1
    
    // Удаление элемента из списка
    numbers.Remove(2); // Удаление элемента со значением 2
    </code></pre>
    
    <h3>Dictionary:</h3>
    <pre><code>
    // Создание и инициализация словаря
    Dictionary<string, int> ages = new Dictionary<string, int>();
    ages.Add("Alice", 30);
    ages.Add("Bob", 25);
    
    // Доступ к элементам словаря по ключу
    int aliceAge = ages["Alice"]; // 30
    
    // Удаление элемента из словаря
    ages.Remove("Bob"); // Удаление элемента с ключом "Bob"
    </code></pre>
    
    <h3>HashSet:</h3>
    <pre><code>
    // Создание и инициализация множества
    HashSet<int> set = new HashSet<int>();
    set.Add(1);
    set.Add(2);
    set.Add(3);
    set.Add(1); // Дубликаты будут проигнорированы
    
    // Проверка наличия элемента в множестве
    bool containsTwo = set.Contains(2); // true
    
    // Удаление элемента из множества
    set.Remove(3); // Удаление элемента со значением 3
    </code></pre>
  </section>
  
  <section>
    <h2>Многомерные массивы и коллекции:</h2>
    <p>Многомерные массивы и коллекции представляют собой массивы и коллекции с более чем двумя измерениями. Они используются для хранения данных в виде таблиц или матриц.</p>
    
    <pre><code>
    // Двумерный массив целых чисел 3x3
    int[,] matrix = new int[3, 3];
    
    // Инициализация двумерного массива
    int[,] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
    </code></pre>
  </section>
  `
    const codeSnippet2=`<section>
    <h2>Условные операторы: if, else if, else</h2>
    <p>Условные операторы позволяют выполнять определенный блок кода, только если заданное условие истинно. В C# основным условным оператором является if. Синтаксис if выглядит следующим образом:</p>
    <pre class="kod">
    <code>
        if (условие)
        {
            // Код, который выполняется, если условие 
            истинно
        }
    </code>
    </pre>
    <p>Если условие истинно, то код внутри блока {} выполняется. В противном случае, если условие ложно, код внутри блока {} пропускается.</p>
    <p>Можно также использовать else if, чтобы проверить дополнительные условия, если первое условие не истинно. А также else, который выполняется, если все предыдущие условия ложны. Пример:</p>
    <pre class="kod">
    <code>
        int x = 10;
        if (x > 10)
        {
            Console.WriteLine("x больше 10");
        }
        else if (x < 10)
        {
            Console.WriteLine("x меньше 10");
        }
        else
        {
            Console.WriteLine("x равно 10");
        }
    </code>
    </pre>
</section>

<section>
    <h2>Циклы: for, while, do-while</h2>
    <p>Циклы используются для повторения определенного блока кода несколько раз.</p>
    <p>for: Цикл for используется, когда известно количество итераций, которые должен выполнить цикл. Синтаксис:</p>
    <pre class="kod">
    <code>
        for (начальное_условие; условие_продолжения; 
            выражение_итерации)
        {
            // Код, который повторяется
        }
    </code>
    </pre>
    <p>while: Цикл while выполняется, пока условие истинно. Синтаксис:</p>
    <pre class="kod">
        
    while (условие)
    {
        // Код, который выполняется, пока 
        условие истинно
    }
        
    </pre>
    <p>do-while: Этот цикл похож на while, но он гарантирует, что блок кода выполнится хотя бы один раз перед проверкой условия. Синтаксис:</p>
    <pre class="kod">
       
    do
    {
        // Код, который выполняется, пока 
        условие истинно
    }
    while (условие);
        
    </pre>
</section>

<section>
    <h2>Операторы ветвления: switch</h2>
    <p>Оператор switch используется для выбора одного из множества блоков кода для выполнения, на основе значения выражения. Синтаксис:</p>
    <pre className={classes.kod}>
        <code>
    switch (выражение)
    {
        case значение1:
            // Код, выполняемый при совпадении с первым 
            значением
            break;
        case значение2:
            // Код, выполняемый при совпадении со вторым 
            значением
            break;
        default:
            // Код, выполняемый, если ни одно значение 
            не совпало
            break;
    }
        </code>
    </pre>
    <p>Ключевое слово break используется для выхода из оператора switch. Без break выполнение кода будет продолжаться независимо от совпадений.</p>
</section>`
    const codeSnippet1 = `
    <section>
    <h1>Программирование</h1>
    <p>Программирование - это процесс создания набора инструкций, которые компьютер может выполнить для решения определенной задачи. Язык программирования - это формальный набор синтаксических и семантических правил, которые определяют, как написать программный код для достижения желаемого результата.</p>
</section>

<section>
    <h2>История языка C#</h2>
    <p>C# был разработан в 2000 году командой под руководством Андерса Хейлсберга в Microsoft. Он создавался как часть .NET Framework для разработки приложений под платформу Windows. Название "C#" происходит от символа, который используется в музыкальной нотации для обозначения диеза (C# - "до-диез").</p>
    <p>Впервые C# был представлен публично в январе 2000 года и стал доступным в 2002 году. С тех пор C# стал одним из основных языков программирования в экосистеме Microsoft.</p>
</section>

<section>
    <h2>Применение C#</h2>
    <p>C# широко используется для разработки различных видов программного обеспечения, включая:</p>
    <ul>
        <li>Веб-приложения: С использованием ASP.NET и ASP.NET Core можно создавать мощные веб-приложения и веб-сервисы.</li>
        <li>Настольные приложения: С помощью технологии Windows Forms или WPF можно разрабатывать настольные приложения для платформы Windows.</li>
        <li>Игры: С использованием фреймворка Unity и языка C# создаются множество современных видеоигр.</li>
        <li>Мобильные приложения: С помощью Xamarin можно разрабатывать кросс-платформенные мобильные приложения для Android и iOS на языке C#.</li>
        <li>Системное программирование: C# используется для разработки различных компонентов операционных систем Windows и встраиваемых систем.</li>
    </ul>
    <p>Поскольку C# интегрируется с платформой .NET, он обладает множеством возможностей и библиотек, что делает его мощным инструментом для разработки программного обеспечения различных типов и масштабов.</p>
</section>

<section>
    <h2>Типы данных</h2>
    <p>Тип данных определяет набор значений, которые может содержать переменная, а также операции, которые можно выполнять с этими значениями. Вот некоторые основные типы данных в C#:</p>
    <ul>
        <li>int (целые числа): Представляет целые числа со знаком, например, -3, 0, 42.</li>
        <li>float (вещественные числа одинарной точности): Представляет вещественные числа одинарной точности, например, 3.14, -0.001, 123.456.</li>
        <li>double (вещественные числа двойной точности): Представляет вещественные числа двойной точности, например, 3.14, -0.001, 123.456.</li>
        <li>char (символы): Представляет одиночный символ в кодировке Unicode, например, 'a', 'B', '?'.</li>
        <li>bool (логические значения): Представляет значение истина (true) или ложь (false).</li>
        <li>string (строки): Представляет набор символов, например, "Привет, мир!", "12345".</li>
    </ul>
</section>

<section>
    <h2>Операции</h2>
    <p>Операции - это символы или ключевые слова, используемые для выполнения операций над данными. В C# есть различные типы операций для разных типов данных:</p>
    <h3>Арифметические операции:</h3>
    <ul>
        <li>+ (сложение): Складывает два операнда.</li>
        <li>- (вычитание): Вычитает второй операнд из первого.</li>
        <li>* (умножение): Перемножает два операнда.</li>
        <li>/ (деление): Делит первый операнд на второй.</li>
        <li>% (остаток от деления): Возвращает остаток от деления первого операнда на второй.</li>
    </ul>
    <h2>Операции сравнения:</h2>
    <ul>
        <li>== (равно): Возвращает true, если операнды равны.</li>
        <li>!= (не равно): Возвращает true, если операнды не равны.</li>
        <li>&lt; (меньше): Возвращает true, если первый операнд меньше второго.</li>
        <li>&gt; (больше): Возвращает true, если первый операнд больше второго.</li>
        <li>&lt;= (меньше или равно): Возвращает true, если первый операнд меньше или равен второму.</li>
        <li>&gt;= (больше или равно): Возвращает true, если первый операнд больше или равен второму.</li>
    </ul>
    <h2>Логические операции:</h2>
    <ul>
        <li>&& (логическое И): Возвращает true, если оба операнда равны true.</li>
        <li>|| (логическое ИЛИ): Возвращает true, если хотя бы один из операндов равен true.</li>
        <li>! (логическое НЕ): Инвертирует значение операнда.</li>
    </ul>
</section>
  `;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {name} = useParams();
    const questionLevels = { 
        level1: level1,
        level2: level2, 
        level3: level3, 
        level4: level4, 
        level5: level5, 
        level6: level6 
    }; 
 
    // Выбираем массив вопросов на основе значения name 
    const questions = questionLevels[name];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answeredQuestions, setAnsweredQuestions] = useState(Array(questions.length).fill(false));

    const handleAnswerClick = (option, index) => {
        if (!answerSelected) {
            const currentQuestion = questions[currentQuestionIndex];
            const updatedAnsweredQuestions = [...answeredQuestions];
            updatedAnsweredQuestions[currentQuestionIndex] = true;
            setAnsweredQuestions(updatedAnsweredQuestions);

            if (option === currentQuestion.correctAnswer) {
                setScore(score + 1);
            }
            setAnswerSelected(true);
            setSelectedOption(index);
        }
    };

    const handleNextButtonClick = () => {
        if (answerSelected) {
            setAnswerSelected(false);
            setSelectedOption(null);
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setQuizCompleted(true);
            }
        }
    };

    const progressWidth = Math.round(((currentQuestionIndex) / questions.length) * 100) + "%";

    if (quizCompleted) {
        return (
            <div className={classes.main}>
                <div className={classes.result}>
                    <p>Тест завершен!</p>
                    <p>Баллы: {score}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.main}>
            <div className={classes.theory}>
                <Tooltip title="Нажми, чтобы ознакомиться" placement="top">
                    <button onClick={handleOpen} className={classes.but1}>Теория</button>
                </Tooltip>
            
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                BackdropProps={{
                    sx: { backdropFilter: 'blur(8px)' }, // Применяем размытие к заднему фону
                    invisible: true, // Убираем затемнение
                  }}
            >
                <Box className={classes.style1}>
             
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 5, ml: 5, mr: 5, overflowX: 'hidden' }} className ={classes.style}>
                <div className={classes.code}>
                    <div dangerouslySetInnerHTML={{ __html: codeSnippet6 }} className={classes.text}/>
              </div>
                
                </Typography>
                
                </Box>
            </Modal>
            <div className={classes.quiz}>
                <div className={classes.progress} style={{ width: progressWidth }}></div>
                <div className={classes.content}>
                    <h3 className={classes.title}>
                        {questions[currentQuestionIndex].question}
                    </h3>
                    <ul className={classes.list}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswerClick(option, index)} className={`${classes.options} ${selectedOption === index ? classes.active : ""} ${answeredQuestions[currentQuestionIndex] ? classes.disabled : ""}`}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.footer}>
                    <button className={classes.but} onClick={handleNextButtonClick} disabled={!answerSelected}>
                        {currentQuestionIndex < questions.length - 1 ? "Следующий" : "Завершить"}
                    </button>
                </div>
            </div>
        </div>
    );
}