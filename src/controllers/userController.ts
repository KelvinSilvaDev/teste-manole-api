import { prisma } from "../config/prisma";
import { User } from "@prisma/client";
import { Request, Response } from "express";

export const createNewUser = async (req: Request, res: Response) => {
    const { name, email }: User = req.body;
    
    const newUser = await prisma.user.create({
        data: {
        name,
        email
        },
    });
    
    res.json(newUser);
}

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    
    res.json(users);
}

export const findUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });
    
    res.json(user);
};

export const updateUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    
    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            email
        }
    });
    
    res.json(updatedUser);
};

export const deleteUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const deletedUser = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
    
    res.json(deletedUser);
};