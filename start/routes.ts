/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

const mainController = () => import('#controllers/main_controller')

router.get('/', [mainController, 'index']).as('home')
