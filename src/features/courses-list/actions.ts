"use server"

import { revalidatePath } from "next/cache"
import { coursesRepository } from "./courses.repository"
import { TCreateCourseListElementCommand } from "./model/types"

export const createCourseAction = async (
    command: TCreateCourseListElementCommand,
    revalidatePagePath: string,
) => {
    await coursesRepository.createCourseElement(command)
    revalidatePath(revalidatePagePath)
}