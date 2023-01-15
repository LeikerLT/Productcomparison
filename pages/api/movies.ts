import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { IMovie, Movie } from "../../schemas/movie.schema";
import connect from "../../lib/mongoose";
import { MovieDTO } from "../../dto/movie.dto";

export default async function Movies(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const session = await unstable_getServerSession(req, res, authOptions);
    // if (!session) return res.status(401).json({ error: "Reikia prisijungti" });
    await connect();
    const movies: IMovie[] = await Movie.find({});
    const dtos = movies.map(m => ({
        id: m._id,
        date: m.date,
        format: m.format,
        genre: m.genre,
        language: m.language,
        title: m.title,
        description: m.description,
        cardImage: m.cardImage,
        modalImage: m.modalImage,
        shortDesc: m.shortDesc,
        actors: m.actors,
        hallID: m.hallID,
    }) as MovieDTO)
    res.json(dtos);
}