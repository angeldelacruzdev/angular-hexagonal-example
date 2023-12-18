export abstract class Mapper<I, O>{
    abstract mapFrom(param: I): O;
    abstract mapTo(param: 0): I;
}