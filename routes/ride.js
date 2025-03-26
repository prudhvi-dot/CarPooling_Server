import express from "express";
import {
  acceptBooking,
  bookARide,
  cancelBooking,
  getBookings,
  getRidesByMe,
  offerRide,
  rejectBooking,
} from "../controllers/rideController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/offerRide", verifyToken, offerRide);
router.get("/getRidesByMe", verifyToken, getRidesByMe);
router.post("/bookARide/:rideId", verifyToken, bookARide);
router.post("/cancelBooking/:bookingId", verifyToken, cancelBooking);
router.post("/rejectBooking/:bookingId", verifyToken, rejectBooking);
router.post("/acceptBooking/:bookingId", verifyToken, acceptBooking);
router.get("/bookings/:rideId", verifyToken, getBookings);

export default router;
