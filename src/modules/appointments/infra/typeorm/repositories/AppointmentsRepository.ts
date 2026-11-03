import Appointment from '../entities/Appointment';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import AppDataSource from '@shared/infra/typeorm/data-source';

const ormRepository = AppDataSource.getRepository(Appointment);

const AppointmentsRepository = ormRepository.extend({
  async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || undefined;
  },

  async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = ormRepository.create({
      provider_id,
      date,
    });

    return ormRepository.save(appointment);
  },
}) satisfies IAppointmentsRepository;

export default AppointmentsRepository;
