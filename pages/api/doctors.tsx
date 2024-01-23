import doctorsData from '../../public/doctor.json';

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: number; name: string; expertise: string; city: string; }[]): void; new(): any; }; }; }) {
  res.status(200).json(doctorsData);
}
