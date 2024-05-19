// questions.js
const level1 = [
  {
    
      question: 'Что такое программирование?',
      options: [
        'Программирование - это процесс создания набора инструкций, которые компьютер может выполнить для решения определенной задачи.',
        'Программирование - это способ выражения художественных идей.',
        'Программирование - это метод общения с животными на языке кода.',
        'Программирование - это процесс создания виртуальных миров.',
      ],
      correctAnswer: 'Программирование - это процесс создания набора инструкций, которые компьютер может выполнить для решения определенной задачи.',
    },
    {
      question: 'Что такое язык программирования?',
      options: [
        'Язык программирования - это способ общения с компьютером на его собственном языке.',
        'Язык программирования - это набор правил для создания интерфейсов.',
        'Язык программирования - это система символов для создания виртуальных миров.',
        'Язык программирования - это методика создания собственных компьютерных игр.',
        'Язык программирования - это формальный набор синтаксических и семантических правил, которые определяют, как написать программный код для достижения желаемого результата.',
      ],
      correctAnswer: 'Язык программирования - это формальный набор синтаксических и семантических правил, которые определяют, как написать программный код для достижения желаемого результата.',
    },
    {
      question: 'Какой символ используется в музыкальной нотации и как он связан с языком программирования C#?',
      options: [
        'Символ "черепаха".',
        'Символ "стрелка".',
        'Символ "звезда".',
        'Символ "диез".',
      ],
      correctAnswer: 'Символ "диез".',
    },
    {
      question: 'Какой тип данных используется для представления целых чисел со знаком в C#?',
      options: ['int', 'float', 'double', 'char'],
      correctAnswer: 'int',
    },
    {
      question: 'Какая операция используется для деления в C#?',
      options: ['+', '-', '*', '/'],
      correctAnswer: '/',
    },
    {
      question: 'Что возвращает операция сравнения "==", если операнды равны?',
      options: ['true', 'false', 'ничего не возвращает', 'ошибка'],
      correctAnswer: 'true',
    },
    {
      question: 'Что выведет следующий код? bool x = true; bool y = false; bool result = x && y; Console.WriteLine(result);',
      options: ['true', 'false', 'ничего', 'ошибка'],
      correctAnswer: 'false',
    },
    {
      question: 'Что выведет следующий код?:int a = 10;\nint b = 5;\nbool result = a > b || a < b;\nConsole.WriteLine(result);',
      options: ['true', 'false', 'ничего', 'ошибка'],
      correctAnswer: 'true',
    },
    {
      question: 'Что выведет следующий код?\nint x = 5;\nint y = 10;\nbool result = !(x > y);\nConsole.WriteLine(result);',
      options: ['true', 'false', 'ничего', 'ошибка'],
      correctAnswer: 'true',
    },
   
  
  ];
  
  const level2 = [
    
    
    {
    
      question: 'Что такое циклы в программировании?',
      options: [
        'Это операторы, позволяющие выполнить определенный блок кода, только если заданное условие истинно.',
        'Это способ повторения определенного блока кода несколько раз.',
        'Это операторы, используемые для выбора блока кода на основе значения выражения.',
        'Это операторы, предназначенные для выполнения различных операций над данными.',
      ],
      correctAnswer: 'Это способ повторения определенного блока кода несколько раз.',
    },
    {
      question: 'Каким будет результат выполнения следующего кода в C#?\n\n```csharp\nint sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);\n```',
      options: [
        '0',
        '15',
        '10',
        'Ошибка компиляции',
      ],
      correctAnswer: '15',
    },
    {
      question: 'Какой синтаксис оператора do-while в C#?',
      options: [
        'do { // Код } (условие);',
        'do (условие) { // Код };',
        'do { // Код } while (условие);',
        'do (условие); { // Код }',
      ],
      correctAnswer: 'do { // Код } while (условие);',
    },
    {
      question: 'Каким будет результат выполнения следующего кода в C#?\n\n```csharp\nint x = 5;\nwhile (x > 0)\n{\n    Console.WriteLine(x);\n    x--;\n}\n```',
      options: [
        'Ошибка компиляции',
        '5, 4, 3, 2, 1',
        '1, 2, 3, 4, 5',
        'Ничего не выведется',
      ],
      correctAnswer: '5, 4, 3, 2, 1',
    },
    {
      question: 'Что произойдет, если условие цикла while в C# всегда ложно?',
      options: [
        'Цикл выполнится бесконечное количество раз.',
        'Цикл не выполнится ни разу, код внутри блока не выполнится.',
        'Произойдет ошибка компиляции.',
        'Произойдет ошибка времени выполнения.',
      ],
      correctAnswer: 'Цикл не выполнится ни разу, код внутри блока не выполнится.',
    },
    {
      question: 'Какой синтаксис цикла for в C#?',
      options: [
        'for (начальное_условие; условие_продолжения; выражение_итерации) { // Код }',
        'for { // Код } (начальное_условие; условие_продолжения; выражение_итерации)',
        '{ // Код } for (начальное_условие; условие_продолжения; выражение_итерации)',
        'for [начальное_условие; условие_продолжения; выражение_итерации] { // Код }',
      ],
      correctAnswer: 'for (начальное_условие; условие_продолжения; выражение_итерации) { // Код }',
    },
    {
      question: 'Какой синтаксис цикла while в C#?',
      options: [
        'while (условие) { // Код }',
        'while { // Код } (условие)',
        '{ // Код } while (условие)',
        'while [условие] { // Код }',
      ],
      correctAnswer: 'while (условие) { // Код }',
    },
    {
      question: 'Что делает ключевое слово break в циклах?',
      options: [
        'Прерывает выполнение цикла и передает управление следующей инструкции после цикла.',
        'Продолжает выполнение цикла со следующей итерации.',
        'Выполняет блок кода, если условие истинно.',
        'Прекращает выполнение программы.',
      ],
      correctAnswer: 'Прерывает выполнение цикла и передает управление следующей инструкции после цикла.',
    },
  


];
  
  const level3 = [
    {
      question: 'Что представляют собой массивы в программировании?',
      options: [
        'Упорядоченные коллекции элементов одного типа данных.',
        'Коллекции элементов одного типа данных, которые могут быть произвольной длины.',
        'Способ хранения только целых чисел.',
        'Структуры данных для хранения строковых значений.',
      ],
      correctAnswer: 'Упорядоченные коллекции элементов одного типа данных.',
    },
    {
      question: 'Как объявляются и инициализируются массивы в C#?',
      options: [
        'С помощью ключевого слова "array" и указания типа данных.',
        'С помощью ключевого слова "new" и указания типа данных элементов массива и их количества.',
        'Массивы в C# объявляются автоматически.',
        'Массивы в C# не требуют инициализации.',
      ],
      correctAnswer: 'С помощью ключевого слова "new" и указания типа данных элементов массива и их количества.',
    },
    {
      question: 'Как получить доступ к элементу массива в C#?',
      options: [
        'Через функцию getElement()',
        'С помощью метода accessElement()',
        'Используя индексацию массива, начиная с нуля.',
        'Путем вызова метода get()',
      ],
      correctAnswer: 'Используя индексацию массива, начиная с нуля.',
    },
    {
      question: 'Что делает метод массива "Length" в C#?',
      options: [
        'Возвращает количество элементов в массиве.',
        'Сортирует массив по возрастанию.',
        'Удаляет последний элемент массива.',
        'Изменяет размер массива.',
      ],
      correctAnswer: 'Возвращает количество элементов в массиве.',
    },
    {
      question: 'Как объявить одномерный массив целых чисел в C#, содержащий 5 элементов?',
      options: [
        'int numbers = new int[5];',
        'int[5] numbers = new int[];',
        'int[] numbers = new int[5];',
        'int[5] numbers = new int();',
      ],
      correctAnswer: 'int[] numbers = new int[5];',
    },
    {
      question: 'Как можно скопировать элементы одного массива в другой в C#?',
      options: [
        'Метод "CopyElements"',
        'Метод "CopyTo"',
        'Метод "Transfer"',
        'Метод "Clone"',
      ],
      correctAnswer: 'Метод "CopyTo"',
    },
    {
      question: 'Каким образом можно удалить элемент из списка в C#?',
      options: [
        'Метод "RemoveElement"',
        'Метод "Remove"',
        'Функция "Delete"',
        'Функция "Erase"',
      ],
      correctAnswer: 'Метод "Remove"',
    },
    {
      question: 'Что будет результатом выполнения следующего кода в C#?\n\n```csharp\nint[] numbers = {1, 2, 3, 4, 5};\nArray.Reverse(numbers);\nConsole.WriteLine(numbers[0]);\n```\n',
      options: ['1', '5', 'Ошибка', '2'],
      correctAnswer: '5',
    },
    {
      question: 'Что вернет метод "IndexOf" в C# при поиске значения 3 в массиве {1, 2, 3, 4, 5}?',
      options: ['2', '4', '0', '-1'],
      correctAnswer: '2',
    },
  ];
  
  const level4 = [
    {
      question: 'Что такое циклы в программировании?',
      options: [
        'Это операторы, позволяющие выполнить определенный блок кода, только если заданное условие истинно.',
        'Это способ повторения определенного блока кода несколько раз.',
        'Это операторы, используемые для выбора блока кода на основе значения выражения.',
        'Это операторы, предназначенные для выполнения различных операций над данными.',
      ],
      correctAnswer: 'Это способ повторения определенного блока кода несколько раз.',
    },
    {
      question: 'Какой синтаксис цикла for в C#?',
      options: [
        'for (начальное_условие; условие_продолжения; выражение_итерации) { // Код }',
        'for { // Код } (начальное_условие; условие_продолжения; выражение_итерации)',
        '{ // Код } for (начальное_условие; условие_продолжения; выражение_итерации)',
        'for [начальное_условие; условие_продолжения; выражение_итерации] { // Код }',
      ],
      correctAnswer: 'for (начальное_условие; условие_продолжения; выражение_итерации) { // Код }',
    },
    {
      question: 'Какой синтаксис цикла while в C#?',
      options: [
        'while (условие) { // Код }',
        'while { // Код } (условие)',
        '{ // Код } while (условие)',
        'while [условие] { // Код }',
      ],
      correctAnswer: 'while (условие) { // Код }',
    },
    {
      question: 'Что делает ключевое слово break в циклах?',
      options: [
        'Прерывает выполнение цикла и передает управление следующей инструкции после цикла.',
        'Продолжает выполнение цикла со следующей итерации.',
        'Выполняет блок кода, если условие истинно.',
        'Прекращает выполнение программы.',
      ],
      correctAnswer: 'Прерывает выполнение цикла и передает управление следующей инструкции после цикла.',
    },
  
  
 
    {
      question: 'Каким будет результат выполнения следующего кода в C#?\n\n```csharp\nint sum = 0;\nfor (int i = 1; i <= 5; i++)\n{\n    sum += i;\n}\nConsole.WriteLine(sum);\n```',
      options: [
        '0',
        '15',
        '10',
        'Ошибка компиляции',
      ],
      correctAnswer: '15',
    },
    {
      question: 'Какой синтаксис оператора do-while в C#?',
      options: [
        'do { // Код } (условие);',
        'do (условие) { // Код };',
        'do { // Код } while (условие);',
        'do (условие); { // Код }',
      ],
      correctAnswer: 'do { // Код } while (условие);',
    },
    {
      question: 'Каким будет результат выполнения следующего кода в C#?\n\n```csharp\nint x = 5;\nwhile (x > 0)\n{\n    Console.WriteLine(x);\n    x--;\n}\n```',
      options: [
        'Ошибка компиляции',
        '5, 4, 3, 2, 1',
        '1, 2, 3, 4, 5',
        'Ничего не выведется',
      ],
      correctAnswer: '5, 4, 3, 2, 1',
    },
    {
      question: 'Что произойдет, если условие цикла while в C# всегда ложно?',
      options: [
        'Цикл выполнится бесконечное количество раз.',
        'Цикл не выполнится ни разу, код внутри блока не выполнится.',
        'Произойдет ошибка компиляции.',
        'Произойдет ошибка времени выполнения.',
      ],
      correctAnswer: 'Цикл не выполнится ни разу, код внутри блока не выполнится.',
    },
  ];
  
  const level5 = [
    {
      question: 'Что такое объектно-ориентированное программирование (ООП)?',
      options: [
        'Это подход к программированию, в котором программа разделяется на независимые модули.',
        'Это подход к программированию, основанный на концепции объектов, которые взаимодействуют между собой.',
        'Это подход к программированию, в котором важным является процесс создания алгоритмов.',
        'Это подход к программированию, в котором основное внимание уделяется работе с базами данных.',
      ],
      correctAnswer: 'Это подход к программированию, основанный на концепции объектов, которые взаимодействуют между собой.',
    },
    {
      question: 'Что такое класс в объектно-ориентированном программировании?',
      options: [
        'Это конкретный экземпляр объекта.',
        'Это формальное описание объекта, определяющее его свойства и действия.',
        'Это набор методов и свойств объекта.',
        'Это процесс скрытия деталей реализации объекта.',
      ],
      correctAnswer: 'Это формальное описание объекта, определяющее его свойства и действия.',
    },
    {
      question: 'Что такое абстракция в объектно-ориентированном программировании?',
      options: [
        'Это процесс скрытия деталей реализации объекта.',
        'Это способность объекта использовать методы разных классов в зависимости от контекста.',
        'Это процесс выделения общих характеристик объекта, игнорируя детали реализации.',
        'Это процесс создания новых классов на основе существующих.',
      ],
      correctAnswer: 'Это процесс выделения общих характеристик объекта, игнорируя детали реализации.',
    },
    {
      question: 'Что такое инкапсуляция в объектно-ориентированном программировании?',
      options: [
        'Это процесс скрытия деталей реализации объекта.',
        'Это способность объекта использовать методы разных классов в зависимости от контекста.',
        'Это процесс выделения общих характеристик объекта, игнорируя детали реализации.',
        'Это механизм, который позволяет создавать новые классы на основе существующих.',
      ],
      correctAnswer: 'Это процесс скрытия деталей реализации объекта.',
    },
    {
      question: 'Что такое наследование в объектно-ориентированном программировании?',
      options: [
        'Это процесс скрытия деталей реализации объекта.',
        'Это способность объекта использовать методы разных классов в зависимости от контекста.',
        'Это механизм, который позволяет создавать новые классы на основе существующих.',
        'Это процесс выделения общих характеристик объекта, игнорируя детали реализации.',
      ],
      correctAnswer: 'Это механизм, который позволяет создавать новые классы на основе существующих.',
    },
    {
      question: 'Что такое полиморфизм в объектно-ориентированном программировании?',
      options: [
        'Это процесс скрытия деталей реализации объекта.',
        'Это способность объекта использовать методы разных классов в зависимости от контекста.',
        'Это процесс выделения общих характеристик объекта, игнорируя детали реализации.',
        'Это механизм, который позволяет создавать новые классы на основе существующих.',
      ],
      correctAnswer: 'Это способность объекта использовать методы разных классов в зависимости от контекста.',
    },
    {
      question: 'Что такое интерфейс в объектно-ориентированном программировании?',
      options: [
        'Это набор методов и свойств объекта.',
        'Это процесс скрытия деталей реализации объекта.',
        'Это контракт, определяющий набор методов и свойств, которые класс должен реализовать.',
        'Это формальное описание объекта, определяющее его свойства и действия.',
      ],
      correctAnswer: 'Это контракт, определяющий набор методов и свойств, которые класс должен реализовать.',
    },
    {
      question: 'Что такое абстрактный класс в объектно-ориентированном программировании?',
      options: [
        'Это класс, который содержит только абстрактные методы.',
        'Это класс, который содержит только реализованные методы.',
        'Это класс, который не может быть инстанциирован и может содержать как реализованные, так и абстрактные методы.',
        'Это класс, который может быть инстанциирован, но не может содержать абстрактные методы.',
      ],
      correctAnswer: 'Это класс, который не может быть инстанциирован и может содержать как реализованные, так и абстрактные методы.',
    },
    {
      question: 'Какие основные принципы объектно-ориентированного программирования вы знаете?',
      options: [
        'Наследование, полиморфизм, инкапсуляция.',
        'Условные операторы, циклы, операторы ветвления.',
        'Интерфейсы, абстрактные классы, абстракция.',
        'Декомпозиция, моделирование, интерфейсы.',
      ],
      correctAnswer: 'Наследование, полиморфизм, инкапсуляция.',
    },
    {
      question: 'Какие преимущества предоставляет использование объектно-ориентированного программирования?',
      options: [
        'Меньший объем кода и быстрая разработка.',
        'Увеличение производительности и уменьшение сложности кода.',
        'Улучшение повторного использования кода и легкость сопровождения.',
        'Все вышеперечисленное.',
      ],
      correctAnswer: 'Все вышеперечисленное.',
    },
    {
      question: 'Какие из перечисленных языков программирования поддерживают объектно-ориентированное программирование?',
      options: [
        'Python',
        'JavaScript',
        'Java',
        'Все вышеперечисленные',
      ],
      correctAnswer: 'Все вышеперечисленные',
    },
    {
      question: 'Каким будет результат выполнения следующего кода в C#?\n\n```csharp\nclass Person\n{\n    public string Name { get; set; }\n\n    public virtual void PrintInfo()\n    {\n        Console.WriteLine("Person: " + Name);\n    }\n}\n\nclass Student : Person\n{\n    public override void PrintInfo()\n    {\n        Console.WriteLine("Student: " + Name);\n    }\n}\n\nPerson person = new Student { Name = "John" };\nperson.PrintInfo();\n```',
      options: [
        'Person: John',
        'Student: John',
        'Ошибка компиляции',
        'Ошибка времени выполнения',
      ],
      correctAnswer: 'Student: John',
    },
    {
      question: 'Что такое множественное наследование?',
      options: [
        'Это процесс создания новых классов на основе существующих.',
        'Это способность класса наследовать свойства и методы от нескольких базовых классов.',
        'Это возможность объекта использовать методы разных классов в зависимости от контекста.',
        'Это процесс выделения общих характеристик объекта, игнорируя детали реализации.',
      ],
      correctAnswer: 'Это способность класса наследовать свойства и методы от нескольких базовых классов.',
    },
    {
      question: 'Каким будет результат выполнения следующего кода в C#?\n\n```csharp\ninterface IShape\n{\n    double Area();\n}\n\nclass Circle : IShape\n{\n    public double Radius;\n\n    public double Area()\n    {\n        return Math.PI * Radius * Radius;\n    }\n}\n\nIShape shape = new Circle { Radius = 5 };\nConsole.WriteLine(shape.Area());\n```',
      options: [
        '78.5',
        '15.7',
        'Ошибка компиляции',
        'Ошибка времени выполнения',
      ],
      correctAnswer: '78.5',
    },
  ];
  
  const level6 = [
    {
      question: 'Что такое обработка исключений в программировании?',
      options: [
        'Это процесс обнаружения ошибок в коде программы.',
        'Это механизм, который позволяет программистам обрабатывать возможные ошибки и неожиданные ситуации в программах.',
        'Это процесс создания пользовательских исключений.',
        'Это механизм, который позволяет создавать исключения в коде программы.',
      ],
      correctAnswer: 'Это механизм, который позволяет программистам обрабатывать возможные ошибки и неожиданные ситуации в программах.',
    },
    {
      question: 'Что такое блок try-catch в обработке исключений?',
      options: [
        'Блок, в котором происходит обработка пользовательских исключений.',
        'Блок, в котором происходит вызов методов для обработки исключений.',
        'Блок, в котором размещается код, который может привести к исключительной ситуации, а также блок для обработки исключений, которые могут возникнуть в этом коде.',
        'Блок, в котором выполняются завершающие действия независимо от того, произошло исключение или нет.',
      ],
      correctAnswer: 'Блок, в котором размещается код, который может привести к исключительной ситуации, а также блок для обработки исключений, которые могут возникнуть в этом коде.',
    },
    {
      question: 'Что произойдет, если в блоке try произойдет исключительная ситуация?',
      options: [
        'Выполнение программы продолжится без изменений.',
        'Выполнение программы будет завершено, и код дальше не выполнится.',
        'Исключение будет обработано в блоке catch, а затем выполнение программы продолжится.',
        'Исключение будет проигнорировано, и выполнение программы продолжится.',
      ],
      correctAnswer: 'Исключение будет обработано в блоке catch, а затем выполнение программы продолжится.',
    },
    {
      question: 'Какой блок в конструкции try-catch-finally будет выполнен в любом случае, независимо от того, произошло исключение или нет?',
      options: [
        'try',
        'catch',
        'finally',
        'Блок finally выполнится только при наличии исключения.',
      ],
      correctAnswer: 'finally',
    },
    {
      question: 'Зачем используется блок finally в обработке исключений?',
      options: [
        'Для вызова методов, обрабатывающих исключения.',
        'Для гарантированного выполнения кода в любом случае, независимо от того, произошло исключение или нет.',
        'Для обработки пользовательских исключений.',
        'Для остановки выполнения программы в случае исключительной ситуации.',
      ],
      correctAnswer: 'Для гарантированного выполнения кода в любом случае, независимо от того, произошло исключение или нет.',
    },
    {
      question: 'Что такое пользовательские исключения?',
      options: [
        'Это ошибки, возникающие при взаимодействии с пользовательским интерфейсом.',
        'Это исключения, которые возникают при работе с пользовательскими данными.',
        'Это специальные классы, которые наследуются от базового класса Exception и используются для обработки специфических ситуаций в приложении.',
        'Это исключения, которые пользователь может самостоятельно обрабатывать.',
      ],
      correctAnswer: 'Это специальные классы, которые наследуются от базового класса Exception и используются для обработки специфических ситуаций в приложении.',
    },
    {
      question: 'Как создать пользовательское исключение в C#?',
      options: [
        'Создать новый класс и добавить в него метод, генерирующий исключение.',
        'Использовать ключевое слово throw.',
        'Создать новый класс, который наследуется от базового класса Exception и добавить необходимые конструкторы.',
        'Использовать ключевое слово catch.',
      ],
      correctAnswer: 'Создать новый класс, который наследуется от базового класса Exception и добавить необходимые конструкторы.',
    },
    {
      question: 'Как обработать пользовательское исключение в C#?',
      options: [
        'Использовать ключевое слово try.',
        'Использовать ключевое слово catch с указанием типа пользовательского исключения.',
        'Использовать ключевое слово finally.',
        'Использовать ключевое слово throw.',
      ],
      correctAnswer: 'Использовать ключевое слово catch с указанием типа пользовательского исключения.',
    },
    {
      question: 'Что такое наиболее важные мероприятия в отладке программного обеспечения?',
      options: [
        'Разработка тестовых сценариев.',
        'Разработка документации.',
        'Использование отладчика, установка точек останова, анализ значений переменных.',
        'Проведение код-ревью.',
      ],
      correctAnswer: 'Использование отладчика, установка точек останова, анализ значений переменных.',
    },
    {
      question: 'Какие лучшие практики рекомендуются при комментировании кода?',
      options: [
        'Писать комментарии только там, где это абсолютно необходимо.',
        'Использовать краткие, но информативные комментарии, объясняющие сложные части кода и принятые решения.',
        'Не писать комментарии, так как они могут ввести в заблуждение.',
        'Писать как можно больше комментариев, чтобы убедиться, что каждая строка кода понятна.',
      ],
      correctAnswer: 'Использовать краткие, но информативные комментарии, объясняющие сложные части кода и принятые решения.',
    },
    {
      question: 'Какие преимущества предоставляет структурирование проекта в программировании?',
      options: [
        'Увеличение сложности кода и уменьшение читаемости.',
        'Уменьшение производительности и повышение сложности сопровождения.',
        'Повышение читаемости, поддерживаемости и масштабируемости кода.',
        'Увеличение количества ошибок и исключений.',
      ],
      correctAnswer: 'Повышение читаемости, поддерживаемости и масштабируемости кода.',
    },
  ];
  
  export { level1, level2, level3, level4, level5, level6 };
  
  