import type { IArtist, Itrack } from "./music.types";
import type { IPlayList } from "./playlist.types";

function spotifyApi(endpoint: 'track', id:string,): Promise<Itrack>
function spotifyApi(endpoint: 'artist', id:string,): Promise<IArtist>
function spotifyApi(endpoint: 'playlist', id:string,): Promise<IPlayList>
function spotifyApi(endpoint: 'string', id:string,): Promise<unknown>{
    return fetch(`https://api.spotify.com/v1/${endpoint}s/${id}`).then(res => res.json())
}

// Перегрузка в TypeScript — это механизм, который позволяет определить несколько сигнатур функций с одним и тем же именем, но разными типами или количеством аргументов. Это не увеличивает нагрузку во время выполнения, а служит для статической проверки типов компилятором TypeScript, делая код более понятным и безопасным, документируя, как функция должна вызываться. 
// Принцип работы
// Декларации перегрузки: Вы объявляете несколько функций с одинаковым именем и разными параметрами (которые могут быть числами, строками, объектами и т.д.).
// Тело функции: За декларациями следует одно реальное тело функции, которое содержит логику и должно быть совместимо со всеми предыдущими сигнатурами.
// Компилятор: Компилятор TypeScript проверяет, как вызывается функция, и сравнивает его с декларациями перегрузки, обеспечивая правильное использование. 
// Пример использования
// typescript
// // Декларации перегрузки
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// // Реализация функции
// function add(a: any, b: any): any {
//   // Тело функции должно быть совместимо со всеми декларациями
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + b;
//   }
//   throw new Error("Типы аргументов несовместимы");
// }

// console.log(add(1, 2)); // Вернет 3
// console.log(add("Hello", " World")); // Вернет "Hello World"
// // console.log(add(1, "hello")); // Ошибка компиляции, типы несовместимы