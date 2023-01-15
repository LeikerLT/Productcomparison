import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import connect from "../../lib/mongoose";
import { PlanDto } from "../../dto/hallPlan.dto";
import { Plan, IPlan } from "../../schemas/hallPlan.schema";

export default async function hallPlan(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const session = await unstable_getServerSession(req, res, authOptions);
    // if (!session) return res.status(401).json({ error: "Reikia prisijungti" });
    await connect();
    const plan: IPlan[] = await Plan.find({});
    const dtos = plan.map(m => ({
        id: m._id,
        seats: m.seats,
    }) as PlanDto)
    res.json(dtos);
}