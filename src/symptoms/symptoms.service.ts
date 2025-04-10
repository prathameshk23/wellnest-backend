import { Injectable } from '@nestjs/common';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { UpdateSymptomDto } from './dto/update-symptom.dto';
import {Symptom} from "./entities/symptom.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class SymptomsService {
  constructor(
    @InjectRepository(Symptom)
    private readonly symptomRepository: Repository<Symptom>,
  ) {}
  async create(createSymptomDto: CreateSymptomDto) {
    await this.symptomRepository.save(createSymptomDto);
    console.log("mklx")
    return 'This action adds a new symptom';
  }

  async findAll() {

    return await this.symptomRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} symptom`;
  }

  update(id: number, updateSymptomDto: UpdateSymptomDto) {
    return `This action updates a #${id} symptom`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptom`;
  }
}
