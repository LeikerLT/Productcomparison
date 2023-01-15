import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import connect from "../../lib/mongoose";
import { SRes } from "../../schemas/Products.schema";

export default async function PostRes(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //const session = await unstable_getServerSession(req, res, authOptions);
    //if (!session) return res.status(401).json({ error: "Reikia prisijungti" });
    await connect();

    await SRes.insertMany(req.body);
    const reservations = await SRes.find({});
    res.json(reservations);
}



