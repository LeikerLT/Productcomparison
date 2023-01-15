import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { Movie, IMovie } from "../../schemas/movie.schema";
import connect from "../../lib/mongoose";
import { MovieDTO } from "../../dto/movie.dto";
import { IRserevation, SRes } from "../../schemas/Products.schema";
import { SResDTO } from "../../dto/Products.dto";
import { ObjectId } from "mongodb";

export default async function seatReservation(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const session = await unstable_getServerSession(req, res, authOptions);
    // if (!session) return res.status(401).json({ error: "Reikia prisijungti" });
    await connect();

    const seats: IRserevation[] = await SRes.find({});
    const dtos = seats.map(m => ({
        id: m._id,
        movieID: m.movieID,
        seat: m.seat,
        row: m.row,
        date: m.date,
        userID: m.userID,
        isActive: true,
    }) as SResDTO)
    res.json(dtos);
}
