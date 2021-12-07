import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";
import { instanceToPlain } from 'class-transformer';

class ListTagService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return instanceToPlain(tags);
    }
}

export { ListTagService }