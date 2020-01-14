export enum PerimeterType {
  CIRCLE = 'CIRCLE',
  POLYGON = 'POLYGON'
}

export const perimeterTypeTranslations = new Map<PerimeterType, string>(
  [
    [PerimeterType.CIRCLE, 'tb.rulenode.perimeter-circle'],
    [PerimeterType.POLYGON, 'tb.rulenode.perimeter-polygon'],
  ]
);

export enum TimeUnit {
  MILLISECONDS = 'MILLISECONDS',
  SECONDS = 'SECONDS',
  MINUTES = 'MINUTES',
  HOURS = 'HOURS',
  DAYS = 'DAYS'
}

export const timeUnitTranslations = new Map<TimeUnit, string>(
  [
    [TimeUnit.MILLISECONDS, 'tb.rulenode.time-unit-milliseconds'],
    [TimeUnit.SECONDS, 'tb.rulenode.time-unit-seconds'],
    [TimeUnit.MINUTES, 'tb.rulenode.time-unit-minutes'],
    [TimeUnit.HOURS, 'tb.rulenode.time-unit-hours'],
    [TimeUnit.DAYS, 'tb.rulenode.time-unit-days']
  ]
);

export enum RangeUnit {
  METER = 'METER',
  KILOMETER = 'KILOMETER',
  FOOT = 'FOOT',
  MILE = 'MILE',
  NAUTICAL_MILE = 'NAUTICAL_MILE'
}

export const rangeUnitTranslations = new Map<RangeUnit, string>(
  [
    [RangeUnit.METER, 'tb.rulenode.range-unit-meter'],
    [RangeUnit.KILOMETER, 'tb.rulenode.range-unit-kilometer'],
    [RangeUnit.FOOT, 'tb.rulenode.range-unit-foot'],
    [RangeUnit.MILE, 'tb.rulenode.range-unit-mile'],
    [RangeUnit.NAUTICAL_MILE, 'tb.rulenode.range-unit-nautical-mile']
  ]
);

export enum EntityDetailsField {
  TITLE = 'TITLE',
  COUNTRY = 'COUNTRY',
  STATE = 'STATE',
  ZIP = 'ZIP',
  ADDRESS = 'ADDRESS',
  ADDRESS2 = 'ADDRESS2',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  ADDITIONAL_INFO = 'ADDITIONAL_INFO'
}

export const entityDetailsTranslations = new Map<EntityDetailsField, string>(
  [
    [EntityDetailsField.TITLE, 'tb.rulenode.entity-details-title'],
    [EntityDetailsField.COUNTRY, 'tb.rulenode.entity-details-country'],
    [EntityDetailsField.STATE, 'tb.rulenode.entity-details-state'],
    [EntityDetailsField.ZIP, 'tb.rulenode.entity-details-zip'],
    [EntityDetailsField.ADDRESS, 'tb.rulenode.entity-details-address'],
    [EntityDetailsField.ADDRESS2, 'tb.rulenode.entity-details-address2'],
    [EntityDetailsField.PHONE, 'tb.rulenode.entity-details-phone'],
    [EntityDetailsField.EMAIL, 'tb.rulenode.entity-details-email'],
    [EntityDetailsField.ADDITIONAL_INFO, 'tb.rulenode.entity-details-additional_info']
  ]
);

export enum FetchMode {
  FIRST = 'FIRST',
  LAST = 'LAST',
  ALL = 'ALL'
}

export enum SamplingOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}