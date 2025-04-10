import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private readonly repository: Repository<Medicine>,
  ) { }
  create(createMedicineDto: CreateMedicineDto) {
    console.log('createMedicineDto', createMedicineDto);
    const medicine = this.repository.save(createMedicineDto);
    return 'This action adds a new medicine';
  }

  findAll() {
    return `This action returns all medicine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicine`;
  }

  async findFromDate(input: any) {
    const { userId, date } = input;

    const parsedDate = new Date(date);

    const response = await this.repository.find({
      where: {
        user: { id: userId },
        date: parsedDate,
      },
    });

    const result = response.map((item) => ({
      id: item.id,
      name: item.name,
      dosage: item.dosage,
      date: item.date,
      userId: item.user.id,
    }));

    return result;
  }

  update(id: number, updateMedicineDto: UpdateMedicineDto) {
    return `This action updates a #${id} medicine`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicine`;
  }
}
