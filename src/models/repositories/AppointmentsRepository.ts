import Appointment from '../Appointment';
import AppDataSource from '../../database/data-source';

const AppointmentsRepository = AppDataSource.getRepository(Appointment).extend({
  async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  },
});

export default AppointmentsRepository;
