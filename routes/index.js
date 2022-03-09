import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/books')
  res.render('index', { title: 'Book List' })
})



export { 
  router
}
