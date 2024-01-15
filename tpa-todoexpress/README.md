# API docs (Todo List App)

Dokumentasi API untuk todo list, penjelasan terkait penggunaan dan cara menggunakan API / services todo list app.

Untuk versi lengkap & enak diliat:
[ `https://tpa005-todolist-api-spec.netlify.app/`](https://tpa005-todolist-api-spec.netlify.app/#/)

## URL / Path

Gunakan URL atau path ini untuk melakukan request pada API dan untuk melakukan request / testing request API.

```
https://tpa005-todolist-api.cyclic.app
```

## Status Codes

HTTP CODE beserta status deskripsinya:

| Status Code | Description                      |
| :---------- | :------------------------------- |
| 200         | `OK`                             |
| 201         | `CREATED`                        |
| 4xx         | `BAD REQUEST` or `UNPROCESSABLE` |
| 404         | `NOT FOUND`                      |
| 500         | `INTERNAL SERVER ERROR`          |

## User Registrasi (register)

API ini digunakan untuk mendaftarkan user atau pengguna baru.

### Request

#### Method | Endpoint

```http
POST | /register
```

#### Headers

| KEY | VALUE | KETERANGAN |
| :-- | :---- | :--------- |
| `-` | `-`   | `-`        |

#### Contoh Request

> Tipe data / value yang harus di-_input_.

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

> Contoh Nilai Pada Request Body :

```json
{
  "name": "we citra",
  "email": "citra@gmail.com",
  "password": "mysecretpass123"
}
```

#### Validations

> Validasi request input yang masuk, mencakup..

| PARAMETER  | VALIDASI            | KETERANGAN                                         |
| :--------- | :------------------ | :------------------------------------------------- |
| `name`     | `required`          | nama tidak boleh kosong.                           |
| `email`    | `required` `unique` | email tidak boleh kosong dan tidak boleh duplikat. |
| `password` | `required`          | password tidak boleh kosong.                       |

!> note : Untuk parameter **_PASSWORD_** di harapkan hati hati jika ingin di gunakan dalam sisi client, karena parameter request / credential bisa bocor!

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang disampaikan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "User baru berhasil didaftarkan!"
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## User Auth (Login)

API ini digunakan untuk user yang ingin melakukan login / autentikasi.

### Request

#### Method | Endpoint

```http
POST | /login
```

#### Headers

| KEY | VALUE | KETERANGAN |
| :-- | :---- | :--------- |
| `-` | `-`   | `-`        |

#### Contoh Request

> Tipe data / value yang harus di-_input_.

```json
{
  "email": "string",
  "password": "string"
}
```

> Contoh Nilai Pada Request Body :

```json
{
  "email": "citra@gmail.com",
  "password": "mysecretpass123"
}
```

#### Validations

> Validasi request input yang masuk, mencakup..

| PARAMETER  | VALIDASI                | KETERANGAN                                               |
| :--------- | :---------------------- | :------------------------------------------------------- |
| `email`    | `required`,`registered` | email tidak boleh kosong dan harus email yang terdaftar. |
| `password` | `required`              | password tidak boleh kosong.                             |

!> note : Untuk parameter **_PASSWORD_** diharapkan hati-hati jika ingin digunakan dalam sisi client, karena parameter request / credential bisa bocor!

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang disampaikan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "Berhasil login!",
  "data": {
    "id": "`increment user id`",
    "name": "user name",
    "email": "user email"
  },
  "token": "{random token}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}",
  "data": {}
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## User Logged Out (Logout)

API ini digunakan untuk user yang ingin melakukan logout.

### Request

#### Method | Endpoint

```http
POST | /logout
```

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                          |
| :-------------- | :---------------------- | :---------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang di dapatkan ketika login atau autentikasi` |

#### Contoh Request

> Tipe data / value yang harus di-_input_.

```json

```

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang disampaikan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "Logged out success!"
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## Get Semua TodoList

API ini digunakan untuk mendapatkan semua todo list berdasarkan user atau pengguna yang melakukan autentikasi dan otorisasi.

### Request

#### Method | Endpoint

```http
GET | /todo
```

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                         |
| :-------------- | :---------------------- | :--------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang didapatkan ketika login atau autentikasi` |

#### Contoh Request

> Tipe data / value yang harus di-_input_.

```json

```

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang disampaikan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response **sukses**.

```json
{
  "success": true,
  "message": "Success!"
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## Get Detail TodoList

API ini digunakan untuk mendapatkan detail todo list berdasarkan id, namun todo yang didapatkan adalah todo dengan `user_id` berdasarkan user atau pengguna yang melakukan autentikasi dan otorisasi.

---

### Request

#### Method | Endpoint

```http
GET | /todo/:id
```

- asumsikan, ada todo list tertentu dengan `id` tertentu, namun jika bukan user yang melakukan authentikasi yang dituju, maka todo list tidak dapat diproses.
- todo yang dapat diproses adalah todo list dari user yang sudah melakukan autentikasi dan otorisasi, bukan user lain.

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                         |
| :-------------- | :---------------------- | :--------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang didapatkan ketika login atau autentikasi` |

#### Contoh Request

> Tipe data / value yang harus di-_input_.

```json

```

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang disampaikan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "Success!",
  "data": {
    "id": "`increment todo id`",
    "task": "Go to home",
    "description": "-",
    "completed": false,
    "user_id": "`user authentication id`",
    "createdAt": "2024-01-09T17:23:30.000Z",
    "updatedAt": "2024-01-09T17:23:30.000Z"
  }
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## Membuat TodoList Baru

API ini digunakan untuk membuat todo list baru.

### Request

#### Method | Endpoint

```http
POST | /todo
```

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                         |
| :-------------- | :---------------------- | :--------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang didapatkan ketika login atau autentikasi` |

#### Contoh Request

> Tipe data / value yang harus di-_input_.

```json
{
  "task": "string",
  "description": "string",
  "completed": "bool"
}
```

> Contoh Nilai Pada Request Body :

```json
{
  "task": "Go to office",
  "description": "No work no money, so i gotta work",
  "completed": false
}
```

#### Validations

> Validasi request input yang masuk, mencakup..

| PARAMETER     | VALIDASI             | KETERANGAN                                                                                  |
| :------------ | :------------------- | :------------------------------------------------------------------------------------------ |
| `task`        | `required`           | task tidak boleh kosong.                                                                    |
| `description` | `nullable`           | description / deskripsi boleh null atau kosong, karena ini tidak wajib.                     |
| `completed`   | `required`,`boolean` | complete tidak boleh kosong, value : `true` jika sudah selesai, `false` jika belum selesai. |

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang disampaikan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "TodoList baru berhasil ditambahkan!",
  "data": {
    "id": "`increment todo id`",
    "task": "Go to office",
    "description": "No work no money, so I gotta work",
    "completed": false,
    "user_id": "`user authentication id`",
    "createdAt": "2024-01-10T09:53:38.000Z",
    "updatedAt": "2024-01-10T09:53:38.000Z"
  }
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## Mengubah TodoList

API ini digunakan untuk mengubah todo list, namun todo yang dapat diubah adalah todo dengan `user_id` berdasarkan user atau pengguna yang melakukan autentikasi dan otorisasi.

### Request

#### Method | Endpoint

```http
PUT | /todo/update/:id
```

- asumsikan ada todo list tertentu dengan `id` tertentu, namun jika bukan user yang melakukan authentikasi yang dituju, maka update todo list tidak dapat diproses.
- todo yang dapat diproses, adalah todo list dari user yang sudah melakukan autentikasi dan otorisasi, bukan user lain.
- dapat digunakan juga untuk mengubah completed menjadi `true`.

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                          |
| :-------------- | :---------------------- | :---------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang di dapatkan ketika login atau autentikasi` |

#### Contoh Request

> Method | endpoint serta id parameter.

```
PUT | /todo/update/2
```

> Tipe data / value yang harus di-_input_.

```json
{
  "task": "string",
  "description": "string",
  "completed": "bool"
}
```

> Contoh Nilai Pada Request Body :

```json
{
  "task": "Go to sleep",
  "description": "After work, I'm tired",
  "completed": true
}
```

#### Validations

> Validasi request input yang masuk, mencakup..

| PARAMETER     | VALIDASI             | KETERANGAN                                                                                  |
| :------------ | :------------------- | :------------------------------------------------------------------------------------------ |
| `task`        | `required`           | task tidak boleh kosong.                                                                    |
| `description` | `nullable`           | description / deskripsi boleh null atau kosong, karena ini tidak wajib.                     |
| `completed`   | `required`,`boolean` | complete tidak boleh kosong, value : `true` jika sudah selesai, `false` jika belum selesai. |

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses di proses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang di sampai kan terhadap response.
- `data | arr/object[]` berupa data object atau array yang di kirim kan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "TodoList baru berhasil di tambahkan!",
  "data": {
    "id": "`increment todo id`",
    "task": "Go to sleep",
    "description": "After work, I'm tired",
    "completed": true,
    "user_id": "`user id`",
    "createdAt": "2024-01-10T09:53:38.000Z",
    "updatedAt": "2024-01-10T19:23:33.000Z"
  }
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## Menghapus TodoList

API ini digunakan untuk menghapus todo list, namun todo yang dapat dihapus adalah todo dengan `user_id` berdasarkan user atau pengguna yang melakukan autentikasi dan otorisasi.

### Request

#### Method | Endpoint

```http
DELETE | /todo/delete/:id
```

- asumsikan ada todo list tertentu dengan `id` tertentu, namun jika bukan user yang melakukan authentikasi yang dituju, maka delete todo list tidak dapat di proses.
- todo yang dapat di proses, adalah todolist dari user yang sudah melakukan autentikasi dan otorisasi, bukan user lain.
- pengecekan yang di lakukan adalah pengecekan todolist berdasarkan id tertentu, dan user id yang sesuai dengan user yang melakukan autentikasi (login).

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                          |
| :-------------- | :---------------------- | :---------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang di dapatkan ketika login atau autentikasi` |

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses di proses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang di sampai kan terhadap response.
- `data | arr/object[]` berupa data object atau array yang di kirim kan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "TodoList berhasil dihapus!"
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
```

## Menghapus Semua TodoList

API ini digunakan untuk menghapus todo list, namun todo yang dapat dihapus adalah todo dengan `user_id` berdasarkan user atau pengguna yang melakukan autentikasi dan otorisasi.

### Request

#### Method | Endpoint

```http
DELETE | /todo/delete-all/
```

- pengecekan yang di lakukan adalah pengecekan todolist berdasarkan user_id tertentu, dan user id yang sesuai dengan user yang melakukan autentikasi (login).

!> **_namun perlu hati hati!, menghapus semua todo list berarti menghapus semua tanpa sisa, dan jika user tertentu melakukan hapus semua todo list maka tidak ada todo list yang tersisa_**

#### Headers

| KEY             | VALUE                   | KETERANGAN                                                                          |
| :-------------- | :---------------------- | :---------------------------------------------------------------------------------- |
| `authorization` | `Bearer {random token}` | `Ganti {random token} menjadi token yang di dapatkan ketika login atau autentikasi` |

### Response

- `success | boolean` menjelaskan bahwa response yang terjadi sukses diproses atau tidak.
- `message | string`|`arr/object[]` dapat berupa data object & array atau string, berisi pesan yang di sampai kan terhadap response.
- `data | arr/object[]` berupa data object atau array yang dikirimkan melalui response, namun tidak semua response mengembalikan data.

#### Response sukses.

```json
{
  "success": true,
  "message": "Semua TodoList berhasil dihapus!"
}
```

#### Penjelasan Response

```js
HTTP CODE : 2xx / 200
STATUS : "OK"
CONTENT TYPE : application/json
```

---

#### Response gagal.

```json
{
  "success": false,
  "message": "{pesan error} / {pesan validasi} / {[data pesan errors]}"
}
```

#### Penjelasan Response

```js
HTTP CODE : 4xx, 5xx
STATUS : "BAD REQUEST" / "NOT FOUND", "SERVER FAILURE"
CONTENT TYPE : application/json
