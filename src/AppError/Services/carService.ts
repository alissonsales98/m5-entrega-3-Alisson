export class CarServices {
    public async create(body: TCarCreatebody): Promise<TCar> {
        const newCarData = { ...body};

        const newCar = await Prisma.car.create( { data: newCarData } );

        return carSchema.parse(newCar);
    };

    public async getOne(id: string): Promise<TCar | null> {
        const idCar = await prisma.car.findFirst({ where: {id} });

        const data = await prisma.car.findFirst({
            where: { id }
        });

        return data;
    }
}