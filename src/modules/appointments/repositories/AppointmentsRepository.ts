import Appointment from '../infra/typeorm/entities/Appointment';
import AppDataSource from '@shared/infra/typeorm/data-source';

const AppointmentsRepository = AppDataSource.getRepository(Appointment).extend({
  async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  },
});

export default AppointmentsRepository;
