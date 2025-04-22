

// import express from "express";
// import { updateService, deleteService, getAllService, getSingleService } from "../Controllers/serviceController.js";
// import {authenticate, restrict} from "../auth/verifyToken.js";

// import reviewRouter from './review.js';

// const router = express.Router();

// //nested route
// router.use("/:serviceId/reviews", reviewRouter);

// router.get('/:id',getSingleService)
// router.get('/', getAllService)
// router.put('/:id',authenticate, restrict(['service']), updateService)
// router.delete('/:id', authenticate, restrict(['service']), deleteService)

// export default router;

import express from "express";
import { updateService, deleteService, getAllService, getSingleService } from "../Controllers/serviceController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from './review.js';

const router = express.Router();

// Nested route for reviews
router.use("/:serviceId/reviews", reviewRouter);

router.get('/:id', getSingleService);
router.get('/', getAllService);
router.put('/:id', authenticate, restrict(['service']), updateService);
router.delete('/:id', authenticate, restrict(['service']), deleteService);

export default router;

