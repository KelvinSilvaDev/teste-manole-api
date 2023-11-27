import express from 'express';
import { 
createNewUser,
deleteUserById,
findUserById,
getAllUsers,
updateUserById
} from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', createNewUser);

router.get('/:id', findUserById);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

export default router;