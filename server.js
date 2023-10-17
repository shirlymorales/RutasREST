const express = require('express')

//crear el objeto express
const app = express()

// url prueba   
app.get('/prueba' , (req , res)=>{
    //ejemplo de response basico
    res.send("me voy a funar a shirly")
})

//uri de bootcamps
//1. seleccionar todos los bootcamps
app.get(('/bootcamps'),
        (req , res) => {
            return res.json({
                success: true,
                msg: "seleccionando todos los bootcamps"
            })
        })

//2. seleccionar el bootcamp cuyo id se pase por parametro
app.get('/bootcamps/:id' ,
        (req , res) => {
            bootcampId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando bootcamp cuyo id es: ${bootcampId}` 
                }
            )
        })

//3. crear bootcamp 
app.post('/bootcamps/:id' ,
        (req , res) => {
            bootcampId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando bootcamp cuyo id es: ${bootcampId}` 
                }
            )
        })

//4. actualzar bootcamp por id
app.put('/bootcamps/:id' ,
        (req , res) => {
            bootcampId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `actualizando bootcamp cuyo id es: ${bootcampId}` 
                }
            )
        })

//5. borrar bootcamp por id
app.delete('/bootcamps/:id' ,
        (req , res) => {
            bootcampId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `eliminando bootcamp cuyo id es: ${bootcampId}` 
                }
            )
        })


//uri para cuorses
//1.Seleccionar todos los cursos
app.get(('/courses'),
        (req , res) => {
            return res.json({
                success: true,
                msg: "Seleccionar todas los cursos"
            })
        })
//2.Seleccionar cursos por id
app.get('/courses/:id' ,
        (req , res) => {
            coursesId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando curso cuyo id es: ${coursesId}` 
                }
            )
        })  
//3.crear un usuario
app.post('/courses/:id' ,
        (req , res) => {
            coursesId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando curso cuyo id es: ${coursesId}` 
                }
            )
        })   
//4.actualizar usuario por id
app.put('/courses/:id' ,
        (req , res) => {
            coursesId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `actualizando curso cuyo id es: ${coursesId}` 
                }
            )
        }) 
//5.Borrar usuarios por id
app.delete('/courses/:id' ,
        (req , res) => {
            coursesId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `eliminando curso cuyo id es: ${coursesId}` 
                }
            )
        })
//uri para reviews
//1.Seleccionar todas las reseñas
app.get(('/reviews'),
        (req , res) => {
            return res.json({
                success: true,
                msg: "Seleccionar todas las reseñas"
            })
        })
//2.Seleccionar reseñas por id
app.get('/reviews/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando reseña cuyo id es: ${reviewId}` 
                }
            )
        })
//3.Crear una reseña
app.post('/reviews/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando reseña cuyo id es: ${reviewId}` 
                }
            )
        }) 
//4.Actualizar reseña por id
app.put('/reviews/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `actualizando reseña cuyo id es: ${reviewId}` 
                }
            )
        })
//5. Borrar reseña por id
app.delete('/reviews/:id' ,
        (req , res) => {
            reviewId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `eliminando reseña cuyo id es: ${reviewId}` 
                }
            )
        })

//uri para users
//1.Seleccionar todos los usuarios
app.get(('/users'),
        (req , res) => {
            return res.json({
                success: true,
                msg: "Seleccionar todas los usuarios"
            })
        })
//2.Seleccionar usuarios por id
app.get('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando usuario cuyo id es: ${userId}` 
                }
            )
        })  
//3.crear un usuario
app.post('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando usuario cuyo id es: ${userId}` 
                }
            )
        })   
//4.actualizar usuario por id
app.put('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `actualizando usuario cuyo id es: ${userId}` 
                }
            )
        }) 
//5.Borrar usuarios por id
app.delete('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `eliminando usuario cuyo id es: ${userId}` 
                }
            )
        })
//definir puerto de servidor
const PUERTO = 4500

//definir servidor
app.listen( PUERTO , 
            console.log(`servidor ejecutando en ${ PUERTO }`))