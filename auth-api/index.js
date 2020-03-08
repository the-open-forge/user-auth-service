import passport from 'passport';
import {LocalStrategy} from 'passport-local';
import {BasicStrategy} from 'passport-http';
import {ClientPasswordStrategy} from 'passport-oauth2-client-password';
import {BearerStrategy} from 'passport-http-bearer';

passport.use(new LocalStrategy(
    (username, password, done) => {
    console.log("TODO");
}));

passport.serializeUser((user, done) => done(user, user.id));

passport.deserializeUser((id, done) => {
    console.log('TODO')
});

