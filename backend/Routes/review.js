// import express from "express";
// import { getAllReviews, createReview } from '../Controllers/reviewController.js';
// import {authenticate, restrict} from './../auth/verifyToken.js';

// const router = express.Router({mergeParams:true});

// router.route('/').get(getAllReviews).post(authenticate, restrict(['customer']), createReview)

// export default router;

import express from "express";
import { getAllReviews, createReview } from '../Controllers/reviewController.js';
import { authenticate, restrict } from './../auth/verifyToken.js';

const router = express.Router({ mergeParams: true });

router.route('/')
    .get(getAllReviews)
    .post(authenticate, restrict(['customer','service']), createReview);

export default router;

// debug
