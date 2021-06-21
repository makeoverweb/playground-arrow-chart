import { t } from '@lingui/macro'

export const SI_PREFIX = {
    milli: (t`basic.measure_si_prefix.milli`),
    centi: (t`basic.measure_si_prefix.centi`),
    kilo: (t`basic.measure_si_prefix.kilo`),
    hect: (t`basic.measure_si_prefix.hecto`),
    mega: (t`basic.measure_si_prefix.mega`),
}

export const SI_PREFIX_FULL = {
    milli: (t`basic.measure_si_prefix_full.milli`),
    centi: (t`basic.measure_si_prefix_full.centi`),
    kilo: (t`basic.measure_si_prefix_full.kilo`),
    hect: (t`basic.measure_si_prefix_full.hecto`),
    mega: (t`basic.measure_si_prefix_full.mega`),
}


export const SI_UNIT = {
    linear: (t`basic.measure_si_prefix.linear`), // исключение так как матчится с ar
    piece: (t`basic.measure_si_unit.piece`),
    meter: (t`basic.measure_si_unit.meter`),
    percent: (t`basic.measure_si_unit.percent`),
    liter: (t`basic.measure_si_unit.liter`),
    gram: (t`basic.measure_si_unit.gram`),
    pascal: (t`basic.measure_si_unit.pascal`),
    kit: (t`basic.measure_si_unit.kit`),
    ar: (t`basic.measure_si_unit.ar`),
    ton: (t`basic.measure_si_unit.ton`),
}

export const SI_UNIT_FULL = {
    linear: (t`basic.measure_si_prefix_full.linear`), // исключение так как матчится с ar
    piece: (t`basic.measure_si_unit_full.piece`),
    meter: (t`basic.measure_si_unit_full.meter`),
    percent: (t`basic.measure_si_unit_full.percent`),
    liter: (t`basic.measure_si_unit_full.liter`),
    gram: (t`basic.measure_si_unit_full.gram`),
    pascal: (t`basic.measure_si_unit_full.pascal`),
    kit: (t`basic.measure_si_unit_full.kit`),
    ar: (t`basic.measure_si_unit_full.ar`),
    ton: (t`basic.measure_si_unit_full.ton`),
}

export const SI_POWER = {
    square: (t`basic.measure_si_power.square`),
    cubic: (t`basic.measure_si_power.cubic`)
}
export const SI_POWER_FULL = {
    square: (t`basic.measure_si_power_full.square`),
    cubic: (t`basic.measure_si_power_full.cubic`)
}

export const MEASURE_UNITS = {
    none: ``,
    piece: (t`basic.measure_units.piece`),
    meter: (t`basic.measure_units.meter`),
    cubic_meter: (t`basic.measure_units.cubic_meter`),
    square_meter: (t`basic.measure_units.square_meter`),
    linear_meter: (t`basic.measure_units.linear_meter`),
    percent: (t`basic.measure_units.percent`),
    ton: (t`basic.measure_units.ton`),
    centimeter: (t`basic.measure_units.centimeter`),
    millimeter: (t`basic.measure_units.millimeter`),
    square_centimeter: (t`basic.measure_units.square_centimeter`),
    cubic_centimeter: (t`basic.measure_units.cubic_centimeter`),
    liter: (t`basic.measure_units.liter`),
    milliliter: (t`basic.measure_units.milliliter`),
    gram: (t`basic.measure_units.gram`),
    kilogram_per_cubic_meter: (t`basic.measure_units.kilogram_per_cubic_meter`),
    gram_per_cubic_centimeter: (t`basic.measure_units.gram_per_cubic_centimeter`),
    megapascal: (t`basic.measure_units.megapascal`),
    pascal: (t`basic.measure_units.pascal`),
    kilometer: (t`basic.measure_units.kilometer`),
    hectare: (t`basic.measure_units.hectare`),
    kit: (t`basic.measure_units.kit`),
    ar: (t`basic.measure_units.ar`),
    kilogram: (t`basic.measure_units.kilogram`),
    null: ``
}

const MONTHS = [
    t`basic.date.January`,
    t`basic.date.February`,
    t`basic.date.March`,
    t`basic.date.April`,
    t`basic.date.May`,
    t`basic.date.June`,
    t`basic.date.July`,
    t`basic.date.August`,
    t`basic.date.September`,
    t`basic.date.October`,
    t`basic.date.November`,
    t`basic.date.December`
]

const WEEKDAYS_LONG = [
    t`basic.date.Sunday`,
    t`basic.date.Monday`,
    t`basic.date.Tuesday`,
    t`basic.date.Wednesday`,
    t`basic.date.Thursday`,
    t`basic.date.Friday`,
    t`basic.date.Saturday`,
]

const WEEKDAYS_SHORT = [ t`basic.date.Su`, t`basic.date.Mo`, t`basic.date.Tu`, t`basic.date.We`, t`basic.date.Th`, t`basic.date.Fr`, t`basic.date.Sa` ]

const FIRST_DAY_OF_WEEK = 1

const LABELS = {
    nextMonth: t`basic.date.next month`, previousMonth: t`basic.date.previous month`
}

const WIDGETS_NAMES = {
    projects_list: t`component.dashboard.widgets.projects_list.widgetName`,
    projects_summary: t`component.dashboard.widgets.projects_summary.widgetName`
}


const PROJECT_TYPES = {
    residential_complex: t`basic.project_types.residential_complex`,
    sport_complex: t`basic.project_types.sport_complex`,
    shopping_center: t`basic.project_types.shopping_center`,
    0: t`basic.project_types.null`
}

const OBJECT_TYPES = {
    residential: t`basic.object_types.residential`,
    road: t`basic.object_types.road`,
    infrastructure: t`basic.object_types.infrastructure`,
    0: t`basic.object_types.other`
}

const META_FIELDS = {
    builtUpArea: t`basic.meta.field.builtUpArea`,
    livingArea: t`basic.meta.field.livingArea`,
    seats: t`basic.meta.field.seats`,
    totalArea: t`basic.meta.field.totalArea`,
    tradingArea: t`basic.meta.field.tradingArea`,
    surface: t`basic.meta.field.surface`,
    lanes: t`basic.meta.field.lanes`,
    length: t`basic.meta.field.length`
}

const REPORT_FACT_TYPE = {
    foreman: t`basic.report_fact_type.foreman`,
    revisor: t`basic.report_fact_type.revisor`
}

export {
    MONTHS,
    WEEKDAYS_LONG,
    WEEKDAYS_SHORT,
    FIRST_DAY_OF_WEEK,
    LABELS,
    WIDGETS_NAMES,
    META_FIELDS,
    OBJECT_TYPES,
    PROJECT_TYPES,
    REPORT_FACT_TYPE
}