# React Hook

## Poin Penting
1. Hook memungkinkan kita untuk menggunakan state dan fitur lain pada react tanpa perlu menulis kelas
2. Jenis Hook :
    - useState
    - useEffect
    - useContext
    - useReducer
    - useCallback
    - useMemo
    - dll
3. Jangan memanggil Hooks dalam loop, condition, atau nested function. Tetapi lakukan pemanggilan Hook dari komponen komponen fungsi React dan dari custom Hooks
4. useEffect memungkinkan kita menggunakan side-effect dalam function component
5. Terdapat 2 jenis useEffect, yaitu yang butuh pembersihan dan yang tidak